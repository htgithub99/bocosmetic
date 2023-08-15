import {
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Certificate } from "./Certificate";
import Menu from "./Menu";
import styles from "./styles.module.scss";

const PageHeader = () => {
  return (
    <>
      <div className={styles.wrapPageHeader}>
        <div className={styles.pageHeader_shopInfo}>
          <div className={styles.shopInfo__name}>
            <p>BoCosmetics - Shop Mỹ Phẩm, Son Môi, Nước Hoa Chính Hãng</p>
          </div>
          <div className={styles.shopInfo__contact}>
            <div className={styles.contact___email}>
              <Link to="#">
                <MailOutlined />
                bocosmetic@gmail.com
              </Link>
            </div>
            <div className={styles.contact___phone}>
              <Link to="#">
                <PhoneOutlined />
                096XXXXXXXX
              </Link>
            </div>
            <div className={styles.contact___other}>
              <Link to="#">
                <FacebookOutlined />
              </Link>
              <Link to="#">
                <InstagramOutlined />
              </Link>
            </div>
          </div>
        </div>
        <Certificate />
        <Menu />
      </div>
    </>
  );
};

export default PageHeader;
