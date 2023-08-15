import BlogCard from "components/BlogCard";
import { BreakpointsUp } from "constants/enum";
import { IListBlogCard } from "constants/interface";
import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useViewport from "utils/hooks/useViewport";
import styles from "./styles.module.scss";

interface IProps {
  data: IListBlogCard[];
}

const SliderListPost: React.FC<IProps> = ({ data }) => {
  const { isMobile: isViewport1024 } = useViewport();
  const { isMobile: isViewport767 } = useViewport(BreakpointsUp.MD);
  return (
    <>
      <Swiper
        slidesPerView={isViewport1024 ? (isViewport767 ? 1 : 2) : 4}
        spaceBetween={isViewport1024 ? 5 : 10}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.wrapSliderListPost}
      >
        {data?.map((item: IListBlogCard) => (
          <SwiperSlide key={item?._id}>
            <BlogCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default React.memo(SliderListPost);
