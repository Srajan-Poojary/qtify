import React from "react";
import style from "./CardGenre.module.css";
const CardGenre = ({ genre }) => {
  return (
    <div className={style.cardTitle}>
      <p>{genre}</p>
    </div>
  );
};

export default CardGenre;
