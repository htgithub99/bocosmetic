import BlogCard from "components/BlogCard";
import styles from "./styles.module.scss";
import { Row, Col } from "antd";
import { IListBlogCard } from "constants/interface";

interface IProps {
  list: IListBlogCard[];
}

const ListBlogItem: React.FC<IProps> = ({ list }) => {
  return (
    <div className={styles.wrapListBlogItem}>
      <Row gutter={[16, 16]}>
        {!!list?.length &&
          list?.map((item: IListBlogCard) => (
            <Col
              className="gutter-row"
              xs={24}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              key={item._id}
            >
              <BlogCard item={item} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ListBlogItem;
