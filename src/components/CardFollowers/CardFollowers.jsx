import React from "react";
import style from "./CardFollowers.module.css";
const CardFollowers = ({ follows }) => {
  return (
    <div className={style.cardFollowersContainer}>
      <div className={style.cardFollowersLable}>
        <p>{follows}</p>
      </div>
    </div>
  );
};

export default CardFollowers;
