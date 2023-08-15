import MainContainer from "components/MainContainer";
import { TypeTopPage } from "constants/constant";
import { ICategory, IProductCard } from "constants/interface";
import { DATA_FAKE_LIST_BLOG } from "constants/json";
import ListBlogItem from "pages/components/ListBlogItem";
import ListProductTitle from "pages/components/ListProductTitle";
import useCategory from "utils/hooks/useCategory";
import usePost from "utils/hooks/usePost";
import useProductTopPage from "utils/hooks/useProductTopPage";
import useResources from "utils/hooks/useResources";
import ListProductItem from "../components/ListProductItem";
import ListProductType from "../components/ListProductType";
import SliderBanner from "../components/SliderBanner";
import styles from "./styles.module.scss";

const Home = () => {
  const { data: parcentageDiscountData } = useProductTopPage({
    payload: {
      type: TypeTopPage.PARCENTAGE_DISCOUNT,
    },
    enabled: true,
  });
  const { data: quantitySoldData } = useProductTopPage({
    payload: {
      type: TypeTopPage.QUANTITY_SOLD,
    },
    enabled: true,
  });
  const { data: numberOfReviewsData } = useProductTopPage({
    payload: {
      type: TypeTopPage.NUMBER_OF_REVIEWS,
    },
    enabled: true,
  });
  const { data: postData } = usePost({
    payload: {
      pageIndex: 1,
      pageSize: 8,
    },
    enabled: true
  });
  const { resourcesData } = useResources({ enabled: true });
  const { categoryData } = useCategory({});

  const convertCategory = (data: ICategory[]) => {
    return data?.filter((item: ICategory) => !item.parent_id);
  };

  const _renderListProductToPage = (
    listProduct: IProductCard[],
    title: string,
    sub_title: string
  ) => (
    <>
      <ListProductTitle
        title={title}
        sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis"
      />
      <div className={styles.listProduct_topsale}>
        <ListProductItem data={listProduct} />
      </div>
    </>
  );

  return (
    <>
      <div className={styles.wrapBanner}>
        <SliderBanner data={resourcesData?.data?.banners} />
      </div>
      <MainContainer>
        <div className={styles.wrapHome}>
          <div className={styles.home_productType}>
            <ListProductType data={convertCategory(categoryData || [])} />
          </div>
          <div className={styles.home_listProduct}>
            {_renderListProductToPage(
              parcentageDiscountData?.data,
              "Top giảm giá",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            )}
          </div>
          <div className={styles.home_listProduct}>
            {_renderListProductToPage(
              quantitySoldData?.data,
              "Top bán chạy",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            )}
          </div>
          <div className={styles.home_listProduct}>
            {_renderListProductToPage(
              numberOfReviewsData?.data,
              "Top đánh giá",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            )}
          </div>
          <div className={styles.home_listBlog}>
            <ListProductTitle
              title="Blog & Tư vấn"
              sub_title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis"
            />
            <div className={styles.listBlog_topBlog}>
              <ListBlogItem list={postData?.data} />
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
