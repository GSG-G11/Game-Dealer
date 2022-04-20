import React, {useState, useEffect} from 'react';
import Card from './Card';
export default function Cards() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=20', {signal})
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });

    return () => {
      controller.abort();
      console.log('Clean up');
    };
  }, []);
  return (
    <div className="container">
      <div className="cards">
        {!games.length && <h1>Loading...</h1>}
        {games.length &&
          games.map(game => {
            return <Card {...game} />;
          })}
      </div>
    </div>
  );
}
