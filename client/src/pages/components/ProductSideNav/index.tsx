import ProductCardSideNav from "components/ProductCardSideNav";
import { IProductCard } from "constants/interface";
import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  items: IProductCard[];
  title: string;
}

const ProductSideNav: React.FC<IProps> = ({ items, title }) => {
  return (
    <>
      <div className={styles.wrapProductSideNav}>
        <ProductCardSideNav
          item={{
            title,
            items,
          }}
        />
      </div>
    </>
  );
};

export default ProductSideNav;
