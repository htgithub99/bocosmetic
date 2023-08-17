import { Breadcrumb } from "antd";
import { getCategory } from "api/category";
import { getFilterByProduct, getProductByCategory } from "api/product";
import Filter from "components/Filter";
import MainContainer from "components/MainContainer";
import {
  CATEGORY_PARENT_TYPE,
  NAME_OF_THE_PAGE,
  ReactQueryKey,
  RoutePath,
} from "constants/constant";
import { convertDataCategory } from "constants/convert";
import { IParamProductByCategory } from "constants/interface";
import CategorySideNav from "pages/components/CategorySideNav";
import { useCallback, useLayoutEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ListProductItem from "../components/ListProductItem";
import ListProductType from "../components/ListProductType";
import styles from "./styles.module.scss";

const MainPage = () => {
  const { categoryId } = useParams<string>();
  const [sizePage, setSizePage] = useState<IParamProductByCategory>({
    pageIndex: 1,
    pageSize: 10,
    name: null,
    filter: {},
  });
  const [showDrawerIs, setShowDrawerIs] = useState<boolean>(false);
  const { data: productData } = useQuery(
    [ReactQueryKey.GET_PRODUCT_BY_CATEGORY_KEY, sizePage],
    () => getProductByCategory(sizePage),
    {
      enabled: Boolean(sizePage.categoryId),
    }
  );
  const { data: categoryData } = useQuery(
    [ReactQueryKey.GET_CATEGORY_KEY, categoryId],
    () =>
      getCategory({ pageSize: 500, parentId: categoryId }).then(({ data }) =>
        convertDataCategory(data)
      ),
    {
      enabled: Boolean(categoryId),
    }
  );

  const { data: filterProductData } = useQuery(
    [ReactQueryKey.GET_INFO_PRODUCT_KEY, categoryId],
    () => getFilterByProduct({ categoryId }),
    {
      enabled: Boolean(categoryId),
    }
  );

  const onCloseDrawer = useCallback(
    () => setShowDrawerIs(false),
    [showDrawerIs]
  );
  const onShowDrawer = useCallback(() => setShowDrawerIs(true), [showDrawerIs]);

  const _renderComponentCategory = () => {
    if (!categoryData?.length) return;
    return (
      <div className={styles.right___productType}>
        <ListProductType data={categoryData || []} />
      </div>
    );
  };

  const onChangeSelect = (value: string) => {
    console.log("_________ ", value);
  };

  const onSearch = (value: string) => {
    setSizePage({ ...sizePage, name: value });
  };

  const onClickCategory = useCallback(
    (field: string, value: string) => {
      setSizePage({
        ...sizePage,
        filter: {
          value,
          field,
        },
      });
    },
    [sizePage]
  );

  const category_name =
    (categoryId &&
      CATEGORY_PARENT_TYPE.find((item) => item.category_id === +categoryId)
        ?.category_name) ||
    NAME_OF_THE_PAGE.promotion;

  useLayoutEffect(() => {
    setSizePage({ ...sizePage, categoryId: categoryId, filter: {} });
  }, [categoryId, setSizePage]);

  return (
    <>
      <div className="product-detail-breakcum">
        <Breadcrumb
          items={[
            {
              title: NAME_OF_THE_PAGE.home,
              href: RoutePath.HOME_PAGE,
            },
            {
              title: category_name,
            },
          ]}
        />
      </div>
      <div className={styles.wrapFlashsale}>
        <div className={styles.flashsale__productSort}>
          <Filter
            onShowDrawer={onShowDrawer}
            onChangeSelect={onChangeSelect}
            onSearch={onSearch}
          />
        </div>
        <MainContainer>
          <div className={styles.flashsale_content}>
            <div className={styles.content__category}>
              <CategorySideNav
                list={filterProductData?.data || []}
                onCloseDrawer={onCloseDrawer}
                showDrawerIs={showDrawerIs}
                onClickCategory={onClickCategory}
              />
            </div>
            <div className={styles.content__right}>
              {_renderComponentCategory()}
              <div className={styles.right___listProduct}>
                <div className={styles.listProduct_topsale}>
                  <ListProductItem data={productData?.data} />
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </>
  );
};

export default MainPage;
