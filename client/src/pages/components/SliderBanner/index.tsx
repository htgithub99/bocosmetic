import { Button } from "antd";
import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { IResourcesBanners } from "constants/interface";

interface IProps {
  data: IResourcesBanners[];
}

const SliderBanner: React.FC<IProps> = ({ data }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className={styles.wrapSliderBanner}
      >
        {data?.map(({ _id, image, title, content }: IResourcesBanners) => (
          <SwiperSlide key={_id}>
            <div className={styles.slide_item}>
              <div className={styles.item__left}>
                <h1>{title}</h1>
                <p>{content}</p>
                <Button htmlType="button">BUY NOW</Button>
              </div>
              <div className={styles.item__right}>
                <img src={image} alt={image} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default React.memo(SliderBanner);
