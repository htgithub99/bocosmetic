import { IMenu } from "constants/interface";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface IProps {
  list: IMenu[];
}

const ListFooterMenu: React.FC<IProps> = ({ list }) => {
  const _renderMenu = (list: IMenu[]) => (
    <div className={styles.wrapList}>
      <ul>
        {list.map((item: IMenu) => (
          <li key={item?.id}>
            <Link to={item?.href}>{item?.link_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
  return _renderMenu(list);
};

export default ListFooterMenu;
