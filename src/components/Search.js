import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div className="input-search-container">
            <input type="text" className="input-search" placeholder="Buscar por nombre, email..." />
        </div>
    )
  }
};

export default Search;
