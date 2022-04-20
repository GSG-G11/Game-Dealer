import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

export default function Card(props) {
  const {title, thumb, normalPrice, salePrice, dealRating, dealID} = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={thumb} alt="" />
      </div>

      <div className="card-body">
        <Link className="game-title" to={`deals/${dealID}`}>
          {title}
        </Link>
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
