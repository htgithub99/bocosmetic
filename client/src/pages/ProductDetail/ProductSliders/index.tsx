import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./styles.module.scss";

import { Image } from "antd";
import { FreeMode, Navigation, Thumbs } from "swiper";

interface IProps {
  images: string[];
}

const ProductSliders: React.FC<IProps> = ({ images }) => {
  const [swiperThumbs, setSwiperThumbs] = useState(null as any);

  const _renderSwiperSlide = (images: string[], preview: boolean) =>
    images.map((item: string, index: number) => (
      <SwiperSlide key={index}>
        <Image src={item} preview={preview} />
      </SwiperSlide>
    ));

  return (
    <div className={styles.productSlidersWrap}>
      <Swiper
        spaceBetween={0}
        navigation={true}
        thumbs={{
          swiper: swiperThumbs && !swiperThumbs.destroyed ? swiperThumbs : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiperMain}
      >
        {_renderSwiperSlide(images, true)}
      </Swiper>
      <Swiper
        onSwiper={setSwiperThumbs}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.mySwiperStep}
      >
        {_renderSwiperSlide(images, false)}
      </Swiper>
    </div>
  );
};

export default memo(ProductSliders);
