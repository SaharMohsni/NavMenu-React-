import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
      return (
<div className="searchBar">
                <input class="searchInput" type="search"/>
                <button class="search-btn " type="submit">Search</button>
            </div>
            )
    }
}

export default SearchBar