import React  from 'react';
import Card from './Card';
export default function Cards({games}) {

  return (
    <div className="container">
      <div className="cards">
        {!games.length && <h1>Loading...</h1>}
        {games.length &&
          games.map(game => {
            return <Card {...game} key={game.gameID} />;
          })}
      </div>
    </div>
  );
}
