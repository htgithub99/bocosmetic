import { IFilterProduct } from "constants/interface";
import ModalCategoryMobile from "./ModalCategoryMobile";
import styles from "./styles.module.scss";

interface IProps {
  item: IFilterProduct;
  onCloseDrawer: () => void;
  onClickCategory: (field: string, value: string) => void;
  showDrawerIs: boolean;
}
const Category: React.FC<IProps> = ({
  item,
  onCloseDrawer,
  showDrawerIs,
  onClickCategory,
}) => {
  const _renderContentDesktop = () => (
    <>
      <div className={styles.category_title}>{item.title}</div>
      <ul className={styles.category_content}>
        {item.item.map((li, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(item.title, li.category)}
          >
            {li.category}
            <span>{`(${li.count})`}</span>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <div className={styles.wrapCategory}>
        {_renderContentDesktop()}
        {showDrawerIs && (
          <ModalCategoryMobile
            item={item}
            onCloseDrawer={onCloseDrawer}
            showDrawerIs={showDrawerIs}
            onClickCategory={onClickCategory}
          />
        )}
      </div>
    </>
  );
};

export default Category;
