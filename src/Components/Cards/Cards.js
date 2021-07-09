import React, { useState } from "react";
import classes from "./Cards.module.css";
import data from "./temp_data";
import Card from "../Card/Card";

const Cards = (props) => {
  const [Restaurants] = useState(data);
  console.log(Restaurants);

  const allCards = Restaurants.map((ele) => <Card data={ele} key={ele.name} />);
  return <div className={classes.Cards}>{allCards}</div>;
};

export default Cards;
