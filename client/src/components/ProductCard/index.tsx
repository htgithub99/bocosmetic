import { Rate } from "antd";
import Button from "components/Button/Button";
import { percentageDiscount } from "constants/calculate";
import { RoutePath } from "constants/constant";
import { formatMoney } from "constants/format";
import { IProductCard } from "constants/interface";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface IProps {
  item: IProductCard;
  addProductToCart: (item: IProductCard) => void;
}

const ProductCard: React.FC<IProps> = ({ item, addProductToCart }) => {
  const {
    images,
    sale_price,
    percentage_discount,
    quantity_sold = 0,
    price,
    product_name,
    _id,
    isDisabled,
  } = item;

  return (
    <div className={styles.wrapProductCard}>
      <div className={styles.productCard_img}>
        <Link to={`${RoutePath.PRODUCT_PAGE}/${_id}`}>
          <img src={images[0]} alt={images[0]} />
        </Link>
      </div>
      <div className="p-5">
        <div className={styles.productCard_sale}>{`Giảm ${
          percentage_discount || percentageDiscount(price, sale_price)
        }%`}</div>
        <div className={styles.productCard_more}>
          <div className={styles.more_star}>
            <Rate defaultValue={100} disabled />
          </div>
          <div className={styles.more_slot}>Đã bán {quantity_sold}</div>
        </div>
        <div className={styles.productCard_price}>
          {formatMoney(price)}
          <span className={styles.price_lowPrice}>
            {formatMoney(sale_price)}
          </span>
        </div>
        <div className={styles.productCard_name}>
          <Link to={`${RoutePath.PRODUCT_PAGE}/${_id}`}>{product_name}</Link>
        </div>
        <Button
          disabled={isDisabled}
          classNameX={styles.productCard_button}
          onClick={() => addProductToCart(item)}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
