import React from "react";
import style from "./CardImage.module.css";
import albumCover from "../../assets/images/album-cover.png";

const CardImage = () => {
  return (
    <div className={style.cardImage}>
      <img src={albumCover} alt="AlbumPicture" />
    </div>
  );
};

export default CardImage;
