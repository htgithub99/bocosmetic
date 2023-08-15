import { calculateSubTotalMoney, calculateTotalMoney } from "constants/calculate";
import { LocalStorageKey, RoutePath } from "constants/constant";
import { formatMoney } from "constants/format";
import { Link } from "react-router-dom";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import styles from "./styles.module.scss";
const CartCheckout = () => {
  const { storedValue, setNewStoredValue } = useLocalStorage(
    LocalStorageKey.CART_TO_USER_KEY,
    []
  );

  return (
    <div className={styles.wrapCartCheckout}>
      <div className={styles.cartCheckout_title}>Cộng giỏ hàng</div>
      <div className={styles.cartCheckout_content}>
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
      <div className={styles.cartCheckout_btnPayment}>
        <Link to={RoutePath.PAYMENT_PAGE}>Tiến hành thanh toán</Link>
      </div>
      <div className={styles.cartCheckout_titleDiscountVoucher}>
        Phiếu ưu đãi
      </div>
      <div className={styles.cartCheckout_inputDiscountVoucher}>
        <input type="text" placeholder="Nhập mã ưu đãi" />
      </div>
      <div className={styles.cartCheckout_btnDiscountVoucher}>
        <button>Áp dụng</button>
      </div>
    </div>
  );
};

export default CartCheckout;
