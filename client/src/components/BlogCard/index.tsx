import { RoutePath } from "constants/constant";
import { IListBlogCard } from "constants/interface";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface IProps {
  item: IListBlogCard;
}
const BlogCard: React.FC<IProps> = ({ item }) => {
  const backgroundImgStyle = () => {
    return {
      backgroundImage: `url(${item.image}) `,
    };
  };
  return (
    <>
      <div className={styles.wrapBlogCard} style={backgroundImgStyle()}>
        <div className={styles.blogCard_title}>
          <h4>{item.title}</h4>
        </div>
        <div className={styles.blogCard_button}>
          <Link to={`${RoutePath.BLOG_PAGE}/${item?._id}`}>Xem</Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
