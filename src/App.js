import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './Components/Card/Cards';
import SingleDeal from './Components/Deal/SingleDeal';
import Search from './Components/Search/Search';
import {Switch, Route} from 'react-router-dom';

function App() {
  const [games, setGames] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [isSearch, setIsSearch] = useState(false);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
  };

  const SearchHandle = e => {
    e.preventDefault();
    setIsSearch(true);
    if (searchInput !== '') {
      const filteredData = games.filter(item => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setGames(filteredData);
    } else {
      setGames(games);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=20', {
      signal,
    })
      .then(res => res.json())
      .then(data => {
        setGames(data);
      });

    return () => {
      controller.abort();
      console.log('Clean up');
    };
  }, []);

  useEffect(() => {
    if (isSearch === true) {
      const controller = new AbortController();
      const signal = controller.signal;
      fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${searchInput}`, {
        signal,
      })
        .then(res => res.json())
        .then(data => {
          setGames(data);
          setIsSearch(false);
        });

      return () => {
        controller.abort();
        console.log('Clean up');
      };
    }
  }, [isSearch]);

  return (
    <>
      <div className="container">
        <Switch>
          <Route path="/deals/:dealID" component={SingleDeal}></Route>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <>
                  <Search searchItems={searchItems} SearchHandle={SearchHandle} isSearch={isSearch}/>
                  <Cards games={games} />
                </>
              );
            }}
          ></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
