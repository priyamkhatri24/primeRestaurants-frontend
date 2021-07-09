import React from "react";
import classes from "./Card.module.css";
import Button from "../../UI/Button/Button";

const Card = (props) => {
  const { data } = props;

  const imageStyle = {
    background: `linear-gradient(rgb(216, 141, 43, 0.6), rgb(150, 104, 7, 0.6)), url(${data.photograph})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className={classes.Card}>
      <div style={imageStyle} className={classes.image}></div>
      <div className={classes.restNameContainer}>
        <h2 className={classes.restaurantName}>{data.name}</h2>
      </div>
      <div>
        <h5 className={classes.cuisine}>{data.cuisine_type}</h5>
      </div>
      <div className={classes.details}>
        <div className={classes.gridItem}>
          <ion-icon name="location-outline"></ion-icon>
          {data.neighborhood}
        </div>
        <div className={classes.gridItem}>
          <ion-icon name="timer-outline"></ion-icon>
          <p>{data.neighborhood}</p>
        </div>
        <div className={classes.gridItem}>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <p>closes at {data.operating_hours}</p>
        </div>
        <div className={classes.gridItem}>
          <ion-icon name="timer-outline"></ion-icon>
          <p>{data.neighborhood}</p>
        </div>
      </div>

      <div className={classes.cardFooter}>
        <div className={classes.cardFooterPara}>
          <p>
            <strong>$100</strong> per person
          </p>
          <p>
            <strong>{data.rating || "null"}</strong> rating (
            {data.reviews.length})
          </p>
        </div>
        <Button textContent="DETAILS" />
      </div>
    </div>
  );
};

export default Card;
