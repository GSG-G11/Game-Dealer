import React from 'react'
import './SingleDeal.css'

export default function SingleDeal() {
  return (
    <div>
      <div className="detalis-page">
        <div className="detalis-img">
          <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/8870/capsule_sm_120.jpg?t=1602794480" alt="" />
        </div>

        <div className="detalis-info">
          <h2 className='info-title'> title </h2>
          <h3 className='info-publisher'>publisher</h3>
          <span className='info-Price'>salePrice: <span> 10$</span>  </span>
          <span className='info-Price'>retailPrice: <span> 10$</span>  </span>

          <p className='info-rating'> Overwhelmingly Positive </p>
          <span className='info-rating'> steamRatingPercent :: <span> 155</span> </span>
          <span className='info-rating'> steamRatingCount :: <span> 999 </span> </span>

          <ul className='list'>
            <li>cheaperStores</li>
          </ul>

            <span className='cheapestPrice'>cheapestPrice:<span> 13$ </span></span>

            <button className='btn'> Back To Home  </button>
          
        </div>
      </div>
    </div>
  )
}
