import React, { useEffect, useState } from "react";
import rightArrow from "../../../assets/images/right-navigation.svg";
import { useSwiper } from "swiper/react";

const RightNavigation = () => {
  const swiper = useSwiper();
  const [end, setEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setEnd(swiper.isEnd);
    });
  });
  return (
    <div>
      <img
        src={rightArrow}
        alt="rightArrow"
        onClick={() => swiper.slideNext()}
        style={{
          display: end ? "none" : "block",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default RightNavigation;
