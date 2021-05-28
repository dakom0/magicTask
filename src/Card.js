import React, { forwardRef } from "react";
import "./Card.css";
import NoPhoto from "./No-Photo-Available.jpeg";

const Card = forwardRef(({ card, releaseDate }, ref) => {
  return (
    <div ref={ref} className="card">
      <div className="title">
        <h4>
          {card.setName} - {card.name}
        </h4>
      </div>
      <img src={card.imageUrl ? card.imageUrl : NoPhoto} alt="" />
      <div className="cardDescription">
        <h3>
          Release Date: <small>{releaseDate}</small>
        </h3>
        <h3>Rarity: {card.rarity}</h3>
        <h3>Type: {card.type}</h3>
      </div>
    </div>
  );
});

export default Card;
