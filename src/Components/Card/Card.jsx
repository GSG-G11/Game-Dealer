import React from 'react';
import './Card.css';

export default function Card(props) {
  const {title, thumb, normalPrice, salePrice, dealRating} = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={thumb} alt="" />
      </div>

      <div className="card-body">
        <h2 className="game-title"> {title}</h2>
        <p className="normal-price">
          <span> Original Price:</span> <sup>$</sup>
          {normalPrice}
        </p>

        <p className="sale-price">
          <span> Price after Sale: </span> <sup>$</sup>
          {salePrice}
        </p>

        <p className="game-rating">
          <span>Deal Rating: </span> {dealRating}
        </p>
      </div>
    </div>
  );
}
