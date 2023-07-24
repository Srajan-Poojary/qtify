import React from "react";
import HeroTitle from "./HeroTitle/HeroTitle";
import HeroImage from "./HeroImage/HeroImage";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <HeroTitle>
          100 Thousand Songs, ad-free <br /> Over thousand podcast episodes
        </HeroTitle>
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
