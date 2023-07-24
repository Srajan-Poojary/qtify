import React from "react";
import style from "./CardImage.module.css";

const CardImage = ({ albumCover }) => {
  return (
    <div className={style.cardImage}>
      <img src={albumCover} alt="AlbumPicture" />
    </div>
  );
};

export default CardImage;
