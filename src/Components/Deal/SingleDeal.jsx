import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './SingleDeal.css';

export default function SingleDeal(props) {
  const {dealID} = props.match.params;
  const [deal, setDeal] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://www.cheapshark.com/api/1.0/deals?id=${dealID}`, {
      signal,
    })
      .then(res => res.json())
      .then(data => {
        setDeal(data);
        console.log(data);
      });

    return () => {
      controller.abort();
      console.log('Clean up');
    };
  }, [dealID]);

  const {
    name,
    publisher,
    retailPrice,
    salePrice,
    steamRatingCount,
    steamRatingPercent,
    thumb,
    steamRatingText,
  } = deal.gameInfo ? deal.gameInfo : {};
  const {cheapestPrice} = deal ? deal : {};
  const {cheaperStores} = deal ? deal : {};

  function homeRoute() {
    props.history.push('/');
  }

  return (
    <div>
      {!deal.gameInfo && <h1>Loading...</h1>}
      {deal.gameInfo && (
        <div className="detalis-page">
          <div className="detalis-img">
            <img src={thumb} alt="" />
          </div>

          <div className="detalis-info">
            <h2 className="info-title"> {name} </h2>
            <h3 className="info-publisher">{publisher}</h3>
            <span className="info-Price">
              salePrice: <span>{salePrice}$</span>
            </span>
            <span className="info-Price">
              retailPrice: <span> {retailPrice}$</span>
            </span>

            <p className="info-rating">{steamRatingText}</p>
            <p className="info-rating">
              steamRatingPercent :: <span> {steamRatingPercent}%</span>
            </p>
            <span className="info-rating">
              steamRatingCount :: <span> {steamRatingCount} </span>
            </span>

            <ul className="list">
              <p style={{marginBottom: '0.8rem'}}>cheaperStores</p>
              {!cheaperStores.length && <li>No cheaper stores</li>}
              {cheaperStores.length &&
                cheaperStores.map((store, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/deals/${store.dealID}`} className="deal-link">
                        Store {index}
                      </Link>
                      <span style={{marginLeft: '2.4rem'}}>
                        Sale Price: {store.salePrice}$
                      </span>
                    </li>
                  );
                })}
            </ul>

            <span className="cheapestPrice">
              cheapestPrice:<span> {cheapestPrice.price ? cheapestPrice.price : 'N/A'}</span>
            </span>

            <button className="btn" onClick={homeRoute}>
              {' '}
              Back To Home{' '}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
