import { Image } from "antd";
import styles from "./styles.module.scss";
import bannerContact from "assets/images/banner-contact.jpg";

const BannerHeaderPage = () => {
  return (
    <div className={styles.wrapBannerHeaderPage}>
      <Image src={bannerContact} preview={false} />
    </div>
  );
};

export default BannerHeaderPage;
