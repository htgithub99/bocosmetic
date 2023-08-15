import { LIST_FOOTER_MENU_ONE, LIST_FOOTER_MENU_TWO } from "constants/json";
import ListFooterMenu from "./ListFooterMenu/ListFooterMenu";
import styles from "./styles.module.scss";
const PageFooter = () => {
  const _renderFooterItem = () =>
    [
      { title: "Thông tin hỗ trợ", list: LIST_FOOTER_MENU_TWO },
      { title: "Danh mục chính", list: LIST_FOOTER_MENU_ONE },
    ].map((item) => (
      <div className={styles.wrapFooter_item} key={item.title}>
        <div className={styles.item__title}>{item.title}</div>
        <div className={styles.item_list}>
          <ListFooterMenu list={item.list} />
        </div>
      </div>
    ));
  return (
    <div className={styles.wrapFooter}>
      <div className={styles.wrapFooter_info}>
        <div className={styles.info__title}>BoCosmetics</div>
        <div className={styles.info_list}>
          <ul>
            <li>
              <span>CS1:</span> Thái nguyên
            </li>
            <li>
              <span>Email:</span> bocosmetic@gmail.com
            </li>
            <li>
              <span>SDT:</span> 0123456789
            </li>
            <li>
              <span>Mở cửa:</span> Từ T2 đến CN, 9H - 22H
            </li>
            <li>
              <span>BoCosmetics:</span> Hệ thống bán Mỹ phẩm, Quà tặng, Son môi, Nước hoa chính hãng
            </li>
          </ul>
        </div>
      </div>
      {_renderFooterItem()}
    </div>
  );
};

export default PageFooter;
