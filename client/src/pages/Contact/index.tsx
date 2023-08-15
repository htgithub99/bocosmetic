import sharp from "assets/images/sharp.png";
import ListProductTitle from "pages/components/ListProductTitle";
import styles from "./styles.module.scss";
import { LIST_CONTACT_INFO } from "constants/json";
import BannerHeaderPage from "pages/components/BannerHeaderPage";
import MainContainer from "components/MainContainer";
import useResources from "utils/hooks/useResources";

const Contact = () => {
  const { resourcesData } = useResources({ enabled: true });

  const _renderContentInfo = () =>
    LIST_CONTACT_INFO.map((item) => (
      <>
        <div className={styles.info___title}>
          <h4>{item.title}</h4>
        </div>
        <ul className={styles.info___content}>
          {item.content.map((sub) => (
            <li>
              <span>{sub.sub_title}</span>
              {sub.sub_content}
            </li>
          ))}
        </ul>
      </>
    ));

  return (
    <div className={styles.wrapContact}>
      <section className={styles.contact_header}>
        <div className={styles.header__banner}>
          <BannerHeaderPage />
        </div>
        <ListProductTitle
          title="GIỚI THIỆU"
          url_img_sub_title={sharp}
          sub_title="Xin chào bạn – Quý khách của BoCosmetic, Lời đầu tiên, cho phép chúng tôi được gửi tới quý khách, lời chúc sức khỏe, thành đạt và hạnh phúc."
        />
      </section>
      <MainContainer>
        <section className={styles.contact_content}>
          <div className={styles.content__description}>
            <div
              dangerouslySetInnerHTML={{
                __html: resourcesData?.data?.introduce,
              }}
            />
          </div>
          <div className={styles.content__info}>{_renderContentInfo()}</div>
        </section>
      </MainContainer>
    </div>
  );
};

export default Contact;
