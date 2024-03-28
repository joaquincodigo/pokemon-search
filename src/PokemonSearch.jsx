import React from 'react';

import Card from './Card';
import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

import './pokemonSearch.css';

function PokemonSearch() {
  return (
    <div className="container">

      <div className="card-container">
        <Card />
      </div>

      <div className="search-container">
        <SearchBar />
        <ResultsList />
      </div>

    </div>
  );
}

export default PokemonSearch;