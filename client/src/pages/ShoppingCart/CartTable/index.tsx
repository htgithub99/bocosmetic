import { CloseOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import blogImg from "assets/images/blog-img.jpg";
import { calculateSubTotalMoneyToItem } from "constants/calculate";
import { LocalStorageKey, RoutePath } from "constants/constant";
import { formatMoney } from "constants/format";
import { CartDataType, IProductCard } from "constants/interface";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import styles from "./styles.module.scss";

const CartTable = () => {
  const { storedValue, setNewStoredValue } = useLocalStorage(
    LocalStorageKey.CART_TO_USER_KEY,
    []
  );
  const convertProductName = (text: string) => text;

  const onIncreaseQuanitty = useCallback((item: IProductCard) => {
    if (item.quantity_order && item.quantity_order < item.quantity) {
      const newValue = storedValue.map((n: IProductCard) => {
        if (n._id === item._id && n.quantity_order) {
          n.quantity_order = n.quantity_order + 1;
        }
        return n;
      });
      setNewStoredValue(newValue);
    }
  }, []);

  const onDecreaseQuanitty = useCallback((item: IProductCard) => {
    if (item.quantity_order && item.quantity_order > 1) {
      const newValue = storedValue.map((n: IProductCard) => {
        if (n._id === item._id && n.quantity_order) {
          n.quantity_order = n.quantity_order - 1;
        }
        return n;
      });
      setNewStoredValue(newValue);
    }
  }, []);

  const onDeleteProduct = useCallback((_id: string) => {
    console.log("______ _____ onDeleteProduct");
    const newValue = storedValue.filter(
      (item: IProductCard) => item._id !== _id
    );
    setNewStoredValue(newValue);
  }, [storedValue]);

  const columns: ColumnsType<CartDataType> = [
    {
      title: "Sản phẩm",
      dataIndex: "product",
      key: "product",
      width: 500,
      render: (item) => (
        <div className={styles.cartTable_product}>
          <div
            className={styles.product__btnDelete}
            onClick={() => onDeleteProduct(item._id)}
          >
            <CloseOutlined />
          </div>
          <div className={styles.product__img}>
            <img src={item.image} alt={blogImg} />
          </div>
          <div className={styles.product__info}>
            <div className={styles.info___name}>
              <Link to={`${RoutePath.PRODUCT_PAGE}/${item._id}`}>
                {convertProductName(item.product_name)}
              </Link>
            </div>
            <div className={styles.info___price}>{formatMoney(item.price)}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (item) => (
        <div className={styles.cartTable_quantity}>
          <input type="text" title="Quantity" value={item.quantity_order} />
          <div
            className={styles.main__BtnDec}
            onClick={() => onDecreaseQuanitty(item)}
          >
            -
          </div>
          <div
            className={styles.main__btnInc}
            onClick={() => onIncreaseQuanitty(item)}
          >
            +
          </div>
        </div>
      ),
    },
    {
      title: "Tạm tính",
      dataIndex: "subtotal",
      key: "subtotal",
      align: "center",
      render: (text) => (
        <div className={styles.cartTable_subtotal}>{formatMoney(text)}</div>
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
    },
    key: item._id,
    subtotal: calculateSubTotalMoneyToItem(item),
  }));

  return (
    <div className={styles.wrapCartTable}>
      <Table columns={columns} dataSource={cartData} pagination={false} />
    </div>
  );
};

export default CartTable;
