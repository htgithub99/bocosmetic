import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import {
  calculateSubTotalMoney,
  calculateSubTotalMoneyToItem,
  calculateTotalMoney
} from "constants/calculate";
import { LocalStorageKey } from "constants/constant";
import { formatMoney } from "constants/format";
import { CartDataType, IProductCard } from "constants/interface";
import { MESSAGE_TABLE } from "constants/mesage";
import { Link } from "react-router-dom";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import styles from "./styles.module.scss";

const PaymentListProduct = () => {
  const convertProductName = (text: string) => text;

  const { storedValue, setNewStoredValue } = useLocalStorage(
    LocalStorageKey.CART_TO_USER_KEY,
    []
  );

  // const onDeleteProduct = useCallback(
  //   (_id: string) => {
  //     console.log("______ _____ onDeleteProduct");
  //     const newValue = storedValue.filter(
  //       (item: IProductCard) => item._id !== _id
  //     );
  //     setNewStoredValue(newValue);
  //   },
  //   [storedValue]
  // );

  const columns: ColumnsType<CartDataType> = [
    {
      title: "Sản phẩm",
      dataIndex: "product",
      key: "product",
      width: 500,
      render: (item) => (
        <div className={styles.cartTable__product}>
          {/* <div
            className={styles.product___btnDelete}
            onClick={() => onDeleteProduct(item._id)}
          >
            <CloseOutlined />
          </div> */}
          {/* <div className={styles.product___img}>
            <img src={blogImg} alt={blogImg} />
          </div> */}
          <div className={styles.product___info}>
            <div className={styles.info____name}>
              <Link to="#">{convertProductName(item.product_name)}</Link>
            </div>
            <div
              className={styles.info____price}
            >{`x${item.quantity_order}`}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Tạm tính",
      dataIndex: "subtotal",
      key: "subtotal",
      align: "right",
      render: (text) => (
        <div className={styles.cartTable__subtotal}>{formatMoney(text)}</div>
      ),
    },
  ];

  const cartData: CartDataType[] = storedValue.map((item: IProductCard) => ({
    ...item,
    quantity: item,
    product: {
      product_name: item.product_name,
      price: item.sale_price || item.price,
      image: item.images[0],
      _id: item._id,
      quantity_order: item.quantity_order,
    },
    key: item._id,
    subtotal: calculateSubTotalMoneyToItem(item),
  }));

  const _renderListProduct = () => (
    <Table
      locale={{
        emptyText: MESSAGE_TABLE.EMPTY_TABLE_PRODUCT,
      }}
      columns={columns}
      dataSource={cartData}
      pagination={false}
    />
  );

  return (
    <div className={styles.wrapPaymentListProduct}>
      <div className={styles.paymentListProduct_title}>Đơn hàng của bạn</div>
      <div className={styles.paymentListProduct_cartTable}>
        {_renderListProduct()}
      </div>
      <div className={styles.paymentListProduct_content}>
        <div className={styles.content__item}>
          <div className={styles.item___field}>Tạm tính</div>
          <div className={styles.item___price}>
            {formatMoney(calculateSubTotalMoney(storedValue))}
          </div>
        </div>
        <div className={styles.content__item}>
          <div className={styles.item___field}>Giao hàng</div>
          <div className={styles.item___price}>
            Giao hàng miễn phí (đơn ≥ 800k)
          </div>
        </div>
        <div className={styles.content__item}>
          <div className={styles.item___field}>Tổng</div>
          <div className={styles.item___price}>
            {formatMoney(calculateTotalMoney(storedValue))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentListProduct;
