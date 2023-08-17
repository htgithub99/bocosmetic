import { Breadcrumb, notification, Radio, RadioChangeEvent, Rate } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { getProductById } from "api/product";
import Button from "components/Button/Button";
import MainContainer from "components/MainContainer";
import {
  CATEGORY_PARENT_TYPE,
  LocalStorageKey,
  NAME_OF_THE_PAGE,
  NotificationDuration,
  ReactQueryKey,
  RoutePath,
  TypeTopPage,
} from "constants/constant";
import { formatMoney } from "constants/format";
import { addProductToCart } from "constants/handle";
import { IProductCard } from "constants/interface";
import { MESSAGE_NOTIFICATION } from "constants/mesage";
import { RegexQuantity } from "constants/regex";
import ProductSideNav from "pages/components/ProductSideNav";
import { useCallback, useLayoutEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import useProductTopPage from "utils/hooks/useProductTopPage";
import ProductSliders from "./ProductSliders";
import styles from "./styles.module.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { storedValue, setNewStoredValue } = useLocalStorage(
    LocalStorageKey.CART_TO_USER_KEY,
    []
  );
  const { data: parcentageDiscountData } = useProductTopPage({
    payload: {
      type: TypeTopPage.PARCENTAGE_DISCOUNT,
      pageSize: 5,
    },
    enabled: true,
  });
  const { data: items } = useQuery(
    [ReactQueryKey.GET_PRODUCT_DETAIL_KEY, id],
    () => getProductById(id || "")
  );

  const [value, setValue] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const [api, contextHolder] = notification.useNotification();

  const onChange = useCallback(
    (e: RadioChangeEvent) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onnotification = (placement: NotificationPlacement) => {
    api.success({
      message: MESSAGE_NOTIFICATION.TITLE_ADD_PRODUCT,
      description: MESSAGE_NOTIFICATION.DESCRIPTION_ADD_PRODUCT,
      placement,
      duration: NotificationDuration.SUCCESS,
      className: "bocosmetic-notification-success",
    });
  };

  const onIncreaseQuanitty = useCallback(() => {
    if (quantity < items?.data?.quantity) setQuantity(quantity + 1);
  }, [quantity, items?.data?.quantity]);

  const onDecreaseQuanitty = useCallback(() => {
    if (quantity > 1) setQuantity(quantity - 1);
  }, [quantity, items?.data?.quantity]);

  const onChangeQuantity = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = +event.target.value ?? 0;
      const isValid = [
        value < 0,
        value > items?.data?.quantity,
        !RegexQuantity.test(`${value}`),
      ];
      if (isValid.some(Boolean)) {
        event.preventDefault();
        setQuantity(0);
        return;
      }
      setQuantity(value);
    },
    [quantity, items?.data?.quantity]
  );

  const category_name = CATEGORY_PARENT_TYPE.find(
    (item) => item.category_id === items?.data?.category_id
  )?.category_name;

  useLayoutEffect(() => {
    if (!storedValue.length) return;
    const quantity = storedValue.find((item: IProductCard) => item._id === id);
    setQuantity(quantity?.quantity_order || 1);
  }, [id, storedValue]);

  return (
    <div className={styles.wrapProductDetail}>
      {contextHolder}
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
      <MainContainer>
        <div className={styles.productDetail_content}>
          <div className={styles.wrapContentTop}>
            <div className={styles.contentTop_listSale}>
              <ProductSideNav
                items={parcentageDiscountData?.data}
                title="Top khuyến mãi"
              />
            </div>
            <div className={styles.contentTop__top}>
              <div className={styles.top___images}>
                <ProductSliders images={items?.data?.images || []} />
              </div>
              <div className={styles.top___info}>
                <div className={styles.info____collection}>
                  <button>{category_name}</button>
                </div>
                <h3 className={styles.info____name}>
                  {items?.data?.product_name}
                </h3>
                <div className={styles.info____more}>
                  <div className={styles.more_____star}>
                    <Rate defaultValue={100} disabled />
                  </div>
                  <div className={styles.more_____slot}>
                    Đã bán {items?.data?.percentage_discount}
                  </div>
                </div>
                <div className={styles.info____price}>
                  {formatMoney(items?.data?.price)}
                  <span className={styles.price_____low}>
                    {formatMoney(items?.data?.sale_price)}
                  </span>
                </div>
                <div className={styles.info____type}>
                  <h5>Loại sản phẩm</h5>
                  <Radio.Group
                    buttonStyle={"solid"}
                    onChange={onChange}
                    value={value}
                    size="large"
                  >
                    <Radio value={1}>Màu hồng</Radio>
                    <Radio value={2}>Màu xanh đậm</Radio>
                    <br />
                    <Radio value={3}>Màu cam</Radio>
                    <Radio value={4}>Màu xanh nhạt</Radio>
                  </Radio.Group>
                </div>
                <div className={styles.info____qty}>
                  <h5>Số lượng</h5>
                  <div className={styles.qty_____main}>
                    <input
                      type="tel"
                      onChange={onChangeQuantity}
                      title="Quantity"
                      value={quantity}
                    />
                    <div
                      className={styles.main______BtnDec}
                      onClick={onDecreaseQuanitty}
                    >
                      -
                    </div>
                    <div
                      className={styles.main______btnInc}
                      onClick={onIncreaseQuanitty}
                    >
                      +
                    </div>
                  </div>
                  <span
                    className={styles.qty_____slot}
                  >{`Có sẵn ${items?.data?.quantity} sản phẩm`}</span>
                </div>
                <Button
                  // disabled={isDisableBtnBuy(storedValue, items?.data?._id)}
                  classNameX={styles.info____btn}
                  onClick={() => {
                    addProductToCart(
                      { ...items?.data, quantity_order: quantity },
                      storedValue,
                      setNewStoredValue
                    );
                    onnotification("topRight");
                  }}
                >
                  Mua ngay
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.content__bottom}>
            <div className={styles.bottom___description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              velit corporis quo voluptate culpa soluta, esse accusamus, sunt
              quia omnis amet temporibus sapiente harum quam itaque libero
              tempore. Ipsum, ducimus. lorem
            </div>
            <div className={styles.bottom___review}></div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default ProductDetail;
