import React from 'react';
import Card from './Card';
export default function Cards({games}) {
  return (
    <div className="container">
      <div className="cards">
        {games.length ? (
          games.length &&
          games.map(game => {
            return <Card {...game} key={game.gameID} />;
          })
        ) : (
          <h1 style={{color: 'white', textAlign: 'center'}}>No Deals Found</h1>
        )}
      </div>
    </div>
  );
}
