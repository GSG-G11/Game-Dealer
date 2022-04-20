import React from 'react';
import './Search.css';

function Search({SearchHandle, searchItems}) {
  return (
    <div className="header">
      <img src="img/logo/cover.png" alt="logo" className="logo" />
      <form className="form-control">
        <input
          type="text"
          name="search"
          placeholder="Search for a deal..."
          className="input-control"
          onChange={e => searchItems(e.target.value)}
        />
        <button className="btn" onClick={SearchHandle}>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
