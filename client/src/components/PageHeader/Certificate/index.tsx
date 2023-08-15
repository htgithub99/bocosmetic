import { MenuUnfoldOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import icon_fb from "assets/banner/fb_icon.png";
import icon_ribbon from "assets/banner/icon_ribbon.png";
import icon_scooter from "assets/banner/icon_scooter.png";
import { LocalStorageKey, RoutePath } from "constants/constant";
import { Link } from "react-router-dom";
import { useLocalStorage } from "utils/hooks/useLocalStorage";
import useToggleMenu from "utils/hooks/useToggleMenu";
import styles from "./styles.module.scss";

const MAX_COUNT_BADGE_PRODUCT = 100;
export const Certificate = () => {
  const { storedValue } = useLocalStorage(LocalStorageKey.CART_TO_USER_KEY, []);
  const { onToggleMenu } = useToggleMenu();

  const countBadge = () =>
    storedValue.length > MAX_COUNT_BADGE_PRODUCT ? "99+" : storedValue.length;

  return (
    <div className={styles.pageHeader_certificate}>
      <div className={styles.menu_icon} onClick={onToggleMenu}>
        <MenuUnfoldOutlined />
      </div>
      <div className={styles.certificate__logo}>
        <Link to={RoutePath.HOME_PAGE}>
          <img src="https://kyo.vn/wp-content/uploads/2018/12/logo-kyo.png" />
        </Link>
      </div>
      <div className={styles.certificate__item}>
        <div className={styles.item___logo}>
          <img src={icon_fb} />
        </div>
        <div className={styles.item___info}>
          <div className={styles.info_name}>
            <b>Facebook</b>
          </div>
          <div className={styles.info_link}>fb.com/kyoauthentic</div>
        </div>
      </div>
      <div className={styles.certificate__item}>
        <div className={styles.item___logo}>
          <img src={icon_ribbon} />
        </div>
        <div className={styles.item___info}>
          <div className={styles.info_name}>
            <b>Đảm bảo chất lượng</b>
          </div>
          <div className={styles.info_link}>100% chính hãng</div>
        </div>
      </div>
      <div className={styles.certificate__item}>
        <div className={styles.item___logo}>
          <img src={icon_scooter} />
        </div>
        <div className={styles.item___info}>
          <div className={styles.info_name}>
            <b>Free ship</b>
          </div>
          <div className={styles.info_link}>Đơn hàng từ 800k</div>
        </div>
      </div>
      <div className={styles.cart_icon}>
        <Link to={RoutePath.SHOPPING_CART_PAGE}>
          <Badge count={countBadge()} size="small">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      </div>
    </div>
  );
};
