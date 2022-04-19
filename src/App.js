import React from 'react';
import './App.css';
// import Cards from './Components/Card/Cards';
// import Search from './Components/Search/Search'
import Card from './Components/Card/Card';
import Search from './Components/Search/Search';

function App() {
  return (
    <>
      <div className="container">
        <Search />
        <Card />
      </div>
    </>
  );
}

export default App;
