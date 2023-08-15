import { HomeOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { RoutePath } from "constants/constant";
import { IMenu } from "constants/interface";
import { LIST_MENU } from "constants/json";
import { Link, useParams } from "react-router-dom";
import useToggleMenu from "utils/hooks/useToggleMenu";
import styles from "./styles.module.scss";

const Menu = () => {
  const { categoryId } = useParams<string>();
  const { collapsed, onToggleMenu } = useToggleMenu();
  
  const _renderLink = (list: IMenu[]) => (
    <ul
      className={classNames(styles.menu_ul, {
        [styles.menu_ul_active]: collapsed,
      })}
    >
      {list.map((item: IMenu) => (
        <li key={item.id}>
          {item.href === RoutePath.HOME_PAGE && (
            <HomeOutlined className={styles.homeIcon} />
          )}
          <Link
            to={item.href}
            className={classNames({
              [styles.a_active]: categoryId && item.id === +categoryId,
            })}
          >
            {item.link_name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.wrapPageHeader}>
      {collapsed && (
        <div className={styles.pageHeader_mask} onClick={onToggleMenu}></div>
      )}
      {_renderLink(LIST_MENU)}
    </div>
  );
};

export default Menu;
