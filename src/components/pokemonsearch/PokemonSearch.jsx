import React, { useState, useEffect } from 'react';

import Card from '../card/Card';
import ResultsList from '../resultlist/ResultsList';
import SearchBar from '../searchbar/SearchBar';

import './pokemonSearch.css';

function PokemonSearch() {
  // State
  const [entirePokemonList, setEntirePokemonList] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState()
  const [selectedType, setSelectedType] = useState()

  // Handlers
  const handleNameInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase()
    const inputLenght = inputValue.length
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
  }

  const handleTypeChange = (event) => {
    const selectedType = event.target.value.toLowerCase();
    setSearchResults(entirePokemonList.filter(
      (pokemon) => {
        for (const typeObject of pokemon.types) {
          for (const type of object.type) {

          }
        }
      }
    ))
  }

  // Fetching
  useEffect(() => {
    // Top level fetch
    async function fetchPokemonData() {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=50"
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

          // Fetching species data for flavor text
          const speciesRes = await fetch(pokemonJSON.species.url)
          const speciesJSON = await speciesRes.json()

          // Extracting flavor text
          const flavorTextEntry = speciesJSON.flavor_text_entries.find(entry => entry.language.name === "en")
          const flavorText = flavorTextEntry ? flavorTextEntry.flavor_text : "No description available."
          const cleanedFlavorText = flavorText.replace(/\s+/g, ' ');

          // Adding flavor text to Pokemon object
          pokemonJSON.flavor_text = cleanedFlavorText

          return pokemonJSON
        }
      )

      // Waiting for all the nested fetchs to complete
      const pokemonData = await Promise.all(pokemonDataPromises)
      setEntirePokemonList(pokemonData)
      setSearchResults(pokemonData)
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
        <SearchBar onNameInputChange={handleNameInputChange} onTypeSelectionChange={handleTypeChange} />
        <ResultsList results={searchResults} handleMouseEnter={handleMouseEnter} />
      </div>

    </div>
  );
}

export default PokemonSearch;