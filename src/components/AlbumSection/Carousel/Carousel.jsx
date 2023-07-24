import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import Card from "../../Card/Card";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import RightNavigation from "../RightNavigation/RightNavigation";
import styles from "./Carousel.module.css";

const Carousel = ({ data }) => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        modules={[Navigation, A11y]}
        navigation={true}
      >
        <div className={styles.cardWrapper}>
          {data.map((album) => {
            return (
              <SwiperSlide key={album.id}>
                <Card follows={album.follows} albumCover={album.image} />
              </SwiperSlide>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <LeftNavigation />
          <RightNavigation />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
