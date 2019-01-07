import React, { Component } from 'react';

const Search = ({ updateList }) => (
    <div>
      <input className="searchBar" type="text" placeholder="search names" onChange={evt=>updateList(evt.target.value)}/>
    </div>
  )



export default Search;
