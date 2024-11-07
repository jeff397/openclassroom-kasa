import React from "react";
import "./_card.scss";

function Card({ image, title }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card_img" />
      <div className="card_overlay"></div>

      <h1 className="card_title">{title}</h1>
    </div>
  );
}

export default Card;
