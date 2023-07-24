import React from "react";
import style from "./Card.module.css";
import CardImage from "./CardImage/CardImage";
import CardFollowers from "./CardFollowers/CardFollowers";
import CardGenre from "./CardGenre/CardGenre";

const Card = ({ follows, albumCover }) => {
  return (
    <div className={style.cardContainer}>
      <CardImage albumCover={albumCover} />
      <CardFollowers follows={follows} />
      {/* <CardGenre genre="New Bollywood" /> */}
    </div>
  );
};

export default Card;
