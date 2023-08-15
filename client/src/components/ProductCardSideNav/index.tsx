import { formatMoney } from "constants/format";
import { IProductCard } from "constants/interface";
import styles from "./styles.module.scss";
import { RoutePath } from "constants/constant";
import { Link } from "react-router-dom";

interface IProps {
  item: {
    title: string;
    items: IProductCard[];
  };
}
const ProductCardSideNav: React.FC<IProps> = ({ item }) => {
  const _renderContentDesktop = () => (
    <>
      <div className={styles.category_title}>{item.title}</div>
      <div className={styles.category_content}>
        {item?.items?.map((item) => (
          <div className={styles.content__item} key={item?._id}>
            <div className={styles.item___image}>
              <img src={item?.images[0]} alt={item?.images[0]} />
            </div>
            <div className={styles.item___right}>
              <div className={styles.right____name}>
                <Link to={`${RoutePath.PRODUCT_PAGE}/${item?._id}`}>
                  {item?.product_name}
                </Link>
              </div>
              <div className={styles.right____price}>
                {formatMoney(item.price)}
                <span className={styles.price_____lowPrice}>
                  {formatMoney(item.sale_price)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className={styles.wrapProductCardSideNav}>
        {_renderContentDesktop()}
      </div>
    </>
  );
};

export default ProductCardSideNav;
