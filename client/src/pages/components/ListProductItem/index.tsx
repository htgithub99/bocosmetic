import { Col, notification, Row } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import ProductCard from "components/ProductCard";
import { LocalStorageKey, NotificationDuration } from "constants/constant";
import { isDisableBtnBuy } from "constants/convert";
import { addProductToCart } from "constants/handle";
import { IProductCard } from "constants/interface";
import { MESSAGE_NOTIFICATION } from "constants/mesage";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import styles from "./styles.module.scss";

interface IProps {
  data: IProductCard[] | any;
}
const ListProductItem = ({ data }: IProps) => {
  const { storedValue, setNewStoredValue } = useLocalStorage(
    LocalStorageKey.CART_TO_USER_KEY,
    []
  );
  const [api, contextHolder] = notification.useNotification();
    
  const onnotification = (placement: NotificationPlacement) => {
    api.success({
      message: MESSAGE_NOTIFICATION.TITLE_ADD_PRODUCT,
      description: MESSAGE_NOTIFICATION.DESCRIPTION_ADD_PRODUCT,
      placement,
      duration: NotificationDuration.SUCCESS,
      className: "bocosmetic-notification-success",
    });
  };

  return (
    <div className={styles.wrapListProduct}>
      {contextHolder}
      <Row gutter={[16, 16]}>
        {!!data?.length &&
          data?.map((item: IProductCard) => (
            <Col
              className="gutter-row"
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              key={item._id}
            >
              <ProductCard
                item={{
                  ...item,
                  isDisabled: isDisableBtnBuy(storedValue, item._id),
                }}
                addProductToCart={(newValue) => {
                  addProductToCart(newValue, storedValue, setNewStoredValue, 1);
                  onnotification("topRight");
                }}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ListProductItem;
