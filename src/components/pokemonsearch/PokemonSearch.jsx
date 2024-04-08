import React, { useState, useEffect } from 'react';

import Card from '../card/Card';
import ResultsList from '../resultlist/ResultsList';
import SearchBar from '../searchbar/SearchBar';

import './pokemonSearch.css';

function PokemonSearch() {

  const [entirePokemonList, setEntirePokemonList] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState()

  const handleNameInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase()
    const inputLenght = inputValue.length
    console.log(inputValue)
    if (inputValue) {
      const filteredPokemonListByName = entirePokemonList.filter((pokemon) => {
        return (pokemon.name.toLowerCase().slice(0, inputLenght) == inputValue)
      })
      setSearchResults(filteredPokemonListByName)
    }

    else {
      setSearchResults(entirePokemonList)
    }

  }

  const handleMouseEnter = (event, result) => {
    setSelectedPokemon({ ...result });
    console.log("From HandleMouseEnter:");
    console.log("Selected Pokemon: ", selectedPokemon)
  }

  useEffect(() => {
    // Top level fetch
    async function fetchPokemonData() {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=10"
      const res = await fetch(url)
      const JSONData = await res.json()

      // Extracting URLs for each Pokemon
      const pokemonUrls = JSONData.results.map(
        pokemon => (pokemon.url)
      );

      // Fetching data for each Pokemon
      const pokemonDataPromises = pokemonUrls.map(
        async (url) => {
          const pokemonRes = await fetch(url)
          const pokemonJSON = await pokemonRes.json()
          return pokemonJSON
        }
      )

      // Waiting for all the nested fetchs to complete
      const pokemonData = await Promise.all(pokemonDataPromises)
      setEntirePokemonList(pokemonData)
      setSearchResults(pokemonData)
      console.log("SearchResults fetched:", pokemonData[0])
      setSelectedPokemon(pokemonData[0])

    }

    fetchPokemonData()
  }, [])

  return (
    <div className="container">

      <div className="card-container">
        <Card selectedPokemon={selectedPokemon} />
      </div>

      <div className="search-container">
        <SearchBar onNameInputChange={handleNameInputChange} />
        <ResultsList results={searchResults} handleMouseEnter={handleMouseEnter} />
      </div>

    </div>
  );
}

export default PokemonSearch;