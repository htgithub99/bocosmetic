import Category from "components/Category";
import { IFilterProduct } from "constants/interface";
import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  list: IFilterProduct[];
  onCloseDrawer: () => void;
  showDrawerIs: boolean;
  onClickCategory: (field: string, value: string) => void;
}

const CategorySideNav: React.FC<IProps> = ({
  list,
  onCloseDrawer,
  showDrawerIs,
  onClickCategory,
}) => {
  return (
    <div className={styles.wrapCategorySideNav}>
      {list.map((item, ix) => (
        <React.Fragment key={ix}>
          <Category
            item={item}
            onCloseDrawer={onCloseDrawer}
            showDrawerIs={showDrawerIs}
            onClickCategory={onClickCategory}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategorySideNav;
