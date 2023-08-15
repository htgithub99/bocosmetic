import { Breadcrumb } from "antd";
import MainContainer from "components/MainContainer";
import { NAME_OF_THE_PAGE, RoutePath } from "constants/constant";
import CartTable from "./CartTable";
import styles from "./styles.module.scss";
import CartCheckout from "./CartCheckout";

const ShoppingCart = () => {
  return (
    <div className={styles.wrapShoppingCart}>
      <div className="product-detail-breakcum">
        <Breadcrumb
          items={[
            {
              title: NAME_OF_THE_PAGE.home,
              href: RoutePath.HOME_PAGE
            },
            {
              title: "Giỏ hàng",
            },
          ]}
        />
      </div>
      <MainContainer>
        <div className={styles.shoppingCart_content}>
          <div className={styles.content__table}>
            <CartTable />
          </div>
          <div className={styles.content__checkout}>
            <CartCheckout />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default ShoppingCart;
