import { Collapse, CollapseProps, Drawer } from "antd";
import { IFilterProduct } from "constants/interface";
import { memo } from "react";
import styles from "./styles.module.scss";

interface IProps {
  item: IFilterProduct;
  onCloseDrawer: () => void;
  showDrawerIs: boolean;
  onClickCategory: (field: string, value: string) => void;
}

const ModalCategoryMobile: React.FC<IProps> = ({
  item,
  onCloseDrawer,
  showDrawerIs,
  onClickCategory,
}) => {
  const _renderChildren = (item: IFilterProduct) =>
    item.item.map((coll, index) => (
      <div
        className={styles.wrapChildren}
        key={index}
        onClick={() => onClickCategory(item.title, coll.category)}
      >
        <div className={styles.content_subCategory}>{coll.category}</div>
        <div className={styles.content_count}>{`( ${coll.count} )`}</div>
      </div>
    ));

  const collapseItem = () => [
    {
      key: item.title,
      label: item.title,
      children: _renderChildren(item),
    },
  ];

  return (
    <Drawer
      title="Lọc sản phẩm"
      placement="bottom"
      closable
      onClose={onCloseDrawer}
      open={showDrawerIs}
      rootClassName="cosmetic-drawer-category-wrapper"
    >
      <Collapse
        items={collapseItem() as CollapseProps["items"]}
        bordered={false}
        defaultActiveKey={["1"]}
      />
    </Drawer>
  );
};

export default memo(ModalCategoryMobile);
