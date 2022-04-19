import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-img">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/268500/capsule_sm_120.jpg?t=1646157374"
            alt=""
          />
        </div>

        <div className="card-body">
          <h2 className="game-title"> batman</h2>
          <p className="normal-price">
            <span> Original Price:</span> <sup>$</sup>50
          </p>

          <p className="sale-price">
            <span> Price after Sale: </span> <sup>$</sup>10
          </p>

          <p className="game-rating">
            <span> Rating: </span> 84%
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/268500/capsule_sm_120.jpg?t=1646157374"
            alt=""
          />
        </div>

        <div className="card-body">
          <h2 className="game-title"> batman</h2>
          <p className="normal-price">
            <span> Original Price:</span> <sup>$</sup>50
          </p>

          <p className="sale-price">
            <span> Price after Sale: </span> <sup>$</sup>10
          </p>

          <p className="game-rating">
            <span> Rating: </span> 84%
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-img">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/268500/capsule_sm_120.jpg?t=1646157374"
            alt=""
          />
        </div>

        <div className="card-body">
          <h2 className="game-title"> batman</h2>
          <p className="normal-price">
            <span> Original Price:</span> <sup>$</sup>50
          </p>

          <p className="sale-price">
            <span> Price after Sale: </span> <sup>$</sup>10
          </p>

          <p className="game-rating">
            <span> Rating: </span> 84%
          </p>
        </div>
      </div>
    </div>
  );
}
