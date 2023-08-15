import { Col, Row } from "antd";
import { ICategory } from "constants/interface";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  data: ICategory[];
}

const MAX_LENGTH_DATA = 8;
const ListProductType = ({ data }: IProps) => {
  const isLength = data?.length > MAX_LENGTH_DATA;

  const stl = {
    padding: "5px 0",
  };

  const _renderContent = ({ category_name, _id, background }: ICategory) => (
    <Link to="#">
      <div
        className={classNames(styles.productType__item, {
          [styles.productType__item___slider]: isLength,
        })}
        style={{
          background: background,
        }}
      >
        {/* <img src={url} alt="productType" width={70} /> */}
        <h4>{category_name}</h4>
      </div>
    </Link>
  );

  const _renderSliderCategory = () => (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={4}
      spaceBetween={10}
    >
      {data?.map(({ category_name, _id, background }: ICategory) => (
        <SwiperSlide key={_id}>
          {_renderContent({ category_name, _id, background })}
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const _renderCategory = () => (
    <Row gutter={[16, 16]}>
      {data?.map(({ category_name, _id, background }: ICategory) => (
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={4}
          key={_id}
        >
          {_renderContent({ category_name, _id, background })}
        </Col>
      ))}
    </Row>
  );

  const _render = () =>
    isLength ? _renderSliderCategory() : _renderCategory();

  return (
    <div className={styles.wrapProductType} style={!isLength ? stl : {}}>
      {_render()}
    </div>
  );
};

export default ListProductType;
