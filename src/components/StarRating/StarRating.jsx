import React from "react";
import fullStar from "../../assets/images/full_star.png";
import emptyStar from "../../assets/images/empty_star.png";
import "./_starRating.scss";

function StarRating({ rating }) {
  const totalStar = 5;

  return (
    <div className="star-rating">
      {[...Array(totalStar)].map((_, index) => (
        <span key={index} className="star">
          <img src={index < rating ? fullStar : emptyStar} alt="star" />
        </span>
      ))}
    </div>
  );
}

export default StarRating;
