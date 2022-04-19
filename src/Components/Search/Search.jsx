import React from 'react';
import './Search.css';
function Search() {
  return (
    <div>
      <form className="form-control">
        <input
          type="text"
          name="search"
          placeholder="Search for a deal..."
          className="input-control"
        />
        <button className="btn">Search</button>
      </form>
    </div>
  );
}

export default Search;
