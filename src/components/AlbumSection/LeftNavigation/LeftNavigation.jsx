import React, { useEffect, useState } from "react";
import leftArrow from "../../../assets/images/left-navigation.svg";
import { useSwiper } from "swiper/react";

const LeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setBeginning(swiper.isBeginning);
    });
  });

  return (
    <div>
      <img
        src={leftArrow}
        alt="leftArrow"
        onClick={() => swiper.slidePrev()}
        style={{ display: isBeginning ? "none" : "block", cursor: "pointer" }}
      />
    </div>
  );
};

export default LeftNavigation;
