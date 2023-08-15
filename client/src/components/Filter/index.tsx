import { Input, Select } from "antd";
import styles from "./styles.module.scss";

interface IProps {
  onShowDrawer: () => void;
  onChangeSelect: (value: string) => void;
  onSearch: (value: string) => void;
}

const Filter: React.FC<IProps> = ({
  onShowDrawer,
  onChangeSelect,
  onSearch,
}) => {
  const { Search } = Input;

  return (
    <div className={styles.wrapFilter}>
      <div className={styles.filter_category} onClick={onShowDrawer}>
        <span className="material-symbols-outlined">tune</span>
      </div>
      <div className={styles.filter_select}>
        <Select
          placeholder="Sắp xếp giá"
          size="large"
          onChange={onChangeSelect}
          options={[
            { value: "price_0_n", label: "Từ thấp đến cao" },
            { value: "price_n_0", label: "Từ cao đến thấp" },
            { value: "price_0-200", label: "Từ 0 đến 200" },
            { value: "price_200-500", label: "Từ 200 đến 500" },
            { value: "price_500-1000", label: "Từ 500 đến 1tr" },
            { value: "price_1000_n", label: "Trên 1tr" },
          ]}
        />
      </div>
      <div className={styles.filter_search}>
        <Search
          size="large"
          placeholder="Tìm kiếm sản phẩm"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Filter;
