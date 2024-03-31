import React, { useState } from 'react';

import Card from '../card/Card';
import ResultsList from '../resultlist/ResultsList';
import SearchBar from '../searchbar/SearchBar';

import './pokemonSearch.css';

function PokemonSearch() {

  const pokedata = [
    { id: 1, name: "Charmander", type: "Fire" },
    { id: 2, name: "Pikachu", type: "Electricity" },
    { id: 3, name: "Togepi", type: "Normal" },
    { id: 4, name: "Jigglypuff", type: "Normal" },
    { id: 5, name: "Squirtle", type: "Water" },
    { id: 6, name: "Bulbasaur", type: "Grass" },
    { id: 7, name: "Eevee", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Snorlax", type: "Normal" },
    { id: 10, name: "Dragonite", type: "Dragon" },
    { id: 11, name: "Gyarados", type: "Water" },
    { id: 12, name: "Mew", type: "Psychic" },
    { id: 13, name: "Magikarp", type: "Water" },
    { id: 14, name: "Vaporeon", type: "Water" },
    { id: 15, name: "Jolteon", type: "Electric" },
    { id: 16, name: "Flareon", type: "Fire" },
    { id: 17, name: "Articuno", type: "Ice" },
    { id: 18, name: "Zapdos", type: "Electric" },
    { id: 19, name: "Moltres", type: "Fire" },
    { id: 20, name: "Gengar", type: "Ghost" },
    { id: 21, name: "Lapras", type: "Water" },
    { id: 22, name: "Ditto", type: "Normal" },
    { id: 23, name: "Pidgeot", type: "Flying" },
    { id: 24, name: "Alakazam", type: "Psychic" },
    { id: 25, name: "Machamp", type: "Fighting" },
    { id: 26, name: "Golem", type: "Rock" },
    { id: 27, name: "Muk", type: "Poison" },
    { id: 28, name: "Cloyster", type: "Water" },
    { id: 29, name: "Gengar", type: "Ghost" },
    { id: 30, name: "Onix", type: "Rock" },
    { id: 31, name: "Hypno", type: "Psychic" },
    { id: 32, name: "Kingler", type: "Water" },
    { id: 33, name: "Electrode", type: "Electric" },
    { id: 34, name: "Clefable", type: "Fairy" },
    { id: 35, name: "Ninetales", type: "Fire" },
    { id: 36, name: "Vulpix", type: "Fire" },
    { id: 37, name: "Poliwrath", type: "Water" },
    { id: 38, name: "Machoke", type: "Fighting" },
    { id: 39, name: "Weezing", type: "Poison" },
    { id: 40, name: "Kangaskhan", type: "Normal" },
    { id: 41, name: "Seadra", type: "Water" },
    { id: 42, name: "Starmie", type: "Water" },
    { id: 43, name: "Mr. Mime", type: "Psychic" },
    { id: 44, name: "Scyther", type: "Bug" },
    { id: 45, name: "Jynx", type: "Ice" },
    { id: 46, name: "Electabuzz", type: "Electric" },
    { id: 47, name: "Magmar", type: "Fire" },
    { id: 48, name: "Pinsir", type: "Bug" },
    { id: 49, name: "Tauros", type: "Normal" },
    { id: 50, name: "Gyarados", type: "Water" }
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