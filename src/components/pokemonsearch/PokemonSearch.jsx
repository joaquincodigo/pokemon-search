import React, { useState } from 'react';

import Card from '../card/Card';
import ResultsList from '../resultlist/ResultsList';
import SearchBar from '../searchbar/SearchBar';

import './pokemonSearch.css';

function PokemonSearch() {

  const pokedata = [
    { id: 1, name: "Charmander", Type: "Fire" },
    { id: 2, name: "Pikachu", Type: "Electricity" },
    { id: 3, name: "Togepi", Type: "Normal" },
    { id: 4, name: "Jigglypuff", Type: "Normal" },
    { id: 5, name: "Squirtle", Type: "Water" },
    { id: 6, name: "Bulbasaur", Type: "Grass" },
    { id: 7, name: "Eevee", Type: "Normal" },
    { id: 8, name: "Mewtwo", Type: "Psychic" },
    { id: 9, name: "Snorlax", Type: "Normal" },
    { id: 10, name: "Dragonite", Type: "Dragon" },
    { id: 11, name: "Gyarados", Type: "Water" },
    { id: 12, name: "Mew", Type: "Psychic" },
    { id: 13, name: "Magikarp", Type: "Water" },
    { id: 14, name: "Vaporeon", Type: "Water" },
    { id: 15, name: "Jolteon", Type: "Electric" },
    { id: 16, name: "Flareon", Type: "Fire" },
    { id: 17, name: "Articuno", Type: "Ice" },
    { id: 18, name: "Zapdos", Type: "Electric" },
    { id: 19, name: "Moltres", Type: "Fire" },
    { id: 20, name: "Gengar", Type: "Ghost" },
    { id: 21, name: "Lapras", Type: "Water" },
    { id: 22, name: "Ditto", Type: "Normal" },
    { id: 23, name: "Pidgeot", Type: "Flying" },
    { id: 24, name: "Alakazam", Type: "Psychic" },
    { id: 25, name: "Machamp", Type: "Fighting" },
    { id: 26, name: "Golem", Type: "Rock" },
    { id: 27, name: "Muk", Type: "Poison" },
    { id: 28, name: "Cloyster", Type: "Water" },
    { id: 29, name: "Gengar", Type: "Ghost" },
    { id: 30, name: "Onix", Type: "Rock" },
    { id: 31, name: "Hypno", Type: "Psychic" },
    { id: 32, name: "Kingler", Type: "Water" },
    { id: 33, name: "Electrode", Type: "Electric" },
    { id: 34, name: "Clefable", Type: "Fairy" },
    { id: 35, name: "Ninetales", Type: "Fire" },
    { id: 36, name: "Vulpix", Type: "Fire" },
    { id: 37, name: "Poliwrath", Type: "Water" },
    { id: 38, name: "Machoke", Type: "Fighting" },
    { id: 39, name: "Weezing", Type: "Poison" },
    { id: 40, name: "Kangaskhan", Type: "Normal" },
    { id: 41, name: "Seadra", Type: "Water" },
    { id: 42, name: "Starmie", Type: "Water" },
    { id: 43, name: "Mr. Mime", Type: "Psychic" },
    { id: 44, name: "Scyther", Type: "Bug" },
    { id: 45, name: "Jynx", Type: "Ice" },
    { id: 46, name: "Electabuzz", Type: "Electric" },
    { id: 47, name: "Magmar", Type: "Fire" },
    { id: 48, name: "Pinsir", Type: "Bug" },
    { id: 49, name: "Tauros", Type: "Normal" },
    { id: 50, name: "Gyarados", Type: "Water" }
  ]

  const [entirePokemonList, setEntirePokemonList] = useState(pokedata)
  const [searchResults, setSearchResults] = useState(entirePokemonList)

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


  return (
    <div className="container">

      <div className="card-container">
        <Card />
      </div>

      <div className="search-container">
        <SearchBar onNameInputChange={handleNameInputChange} />
        <ResultsList results={searchResults} />
      </div>

    </div>
  );
}

export default PokemonSearch;