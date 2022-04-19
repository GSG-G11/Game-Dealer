import React, {useState, useEffect} from 'react';
import Card from './Card';
export default function Cards() {
  return (
    <div className="container">
      <div className="cards">
        {/* {games.map((game) =>{
            return (
            <Card />
            ) 
        })} */}
        <Card />
      </div>
    </div>
  );
}
