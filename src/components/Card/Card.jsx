import React from "react";
import style from "./Card.module.css";
import CardImage from "../CardImage/CardImage";
import CardFollowers from "../CardFollowers/CardFollowers";
import CardGenre from "../CardGenre/CardGenre";

const Card = ({ follows, title }) => {
  return (
    <div className={style.cardContainer}>
      <CardImage />
      <CardFollowers follows="100 Follows" />
      <CardGenre genre="New Bollywood" />
    </div>
  );
};

export default Card;
