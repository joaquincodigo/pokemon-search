import React, { useState } from 'react';

import Card from '../card/Card';
import ResultsList from '../resultlist/ResultsList';
import SearchBar from '../searchbar/SearchBar';

import './pokemonSearch.css';

function PokemonSearch() {

  const pokedata = [
    { id: 1, name: "Charmander", type: "Fire", description: "A small, flame-tailed lizard Pokémon. It has a fiery tail and can breathe flames." },
    { id: 2, name: "Pikachu", type: "Electricity", description: "A small, yellow, mouse-like Pokémon. It can generate electricity from its cheeks." },
    { id: 3, name: "Togepi", type: "Normal", description: "A small, egg-shaped Pokémon. It is said to bring good fortune to its trainer." },
    { id: 4, name: "Jigglypuff", type: "Normal", description: "A round, pink Pokémon known for its soothing lullabies. It can put opponents to sleep." },
    { id: 5, name: "Squirtle", type: "Water", description: "A small, blue turtle Pokémon. It can shoot water from its mouth with great accuracy." },
    { id: 6, name: "Bulbasaur", type: "Grass", description: "A small, green, plant-like Pokémon. It has a bulb on its back that grows into a large flower." },
    { id: 7, name: "Eevee", type: "Normal", description: "A small, fox-like Pokémon with many evolutions. It has unstable genetic makeup." },
    { id: 8, name: "Mewtwo", type: "Psychic", description: "A powerful, genetically-engineered Pokémon. It was created by humans in a lab." },
    { id: 9, name: "Snorlax", type: "Normal", description: "A large, sleeping Pokémon known for blocking paths. It eats and sleeps most of the day." },
    { id: 10, name: "Dragonite", type: "Dragon", description: "A large, dragon-like Pokémon. It can fly at high speeds and breathe fire." },
    { id: 11, name: "Gyarados", type: "Water", description: "A large, serpentine Pokémon with a fierce temper. It can cause devastating storms with its rage." },
    { id: 12, name: "Mew", type: "Psychic", description: "A mysterious, mythical Pokémon believed to contain the genetic code of all Pokémon. It is rarely seen." },
    { id: 13, name: "Magikarp", type: "Water", description: "A small, weak Pokémon known for its inability to do much besides flop around. It evolves into Gyarados." },
    { id: 14, name: "Vaporeon", type: "Water", description: "A water-type Eevee evolution. It has the ability to manipulate water molecules to dissolve into the air." },
    { id: 15, name: "Jolteon", type: "Electric", description: "An electric-type Eevee evolution. It can generate electricity from its fur and release it as lightning bolts." },
    { id: 16, name: "Flareon", type: "Fire", description: "A fire-type Eevee evolution. It has a fiery mane and can create intense flames." },
    { id: 17, name: "Articuno", type: "Ice", description: "A legendary bird Pokémon with ice powers. It can freeze its opponents solid with its icy breath." },
    { id: 18, name: "Zapdos", type: "Electric", description: "A legendary bird Pokémon with electric powers. It can create thunderstorms with its wings." },
    { id: 19, name: "Moltres", type: "Fire", description: "A legendary bird Pokémon with fire powers. It can generate intense heat and flames." },
    { id: 20, name: "Gengar", type: "Ghost", description: "A mischievous, ghost-type Pokémon. It enjoys playing pranks on unsuspecting victims and can phase through walls." }
  ];

  const [entirePokemonList, setEntirePokemonList] = useState(pokedata)
  const [searchResults, setSearchResults] = useState(entirePokemonList)
  const [selectedPokemon, setSelectedPokemon] = useState(pokedata[1])

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

  }

  return (
    <div className="container">

      <div className="card-container">
        <Card result={selectedPokemon} />
      </div>

      <div className="search-container">
        <SearchBar onNameInputChange={handleNameInputChange} />
        <ResultsList results={searchResults} handleMouseEnter={handleMouseEnter} />
      </div>

    </div>
  );
}

export default PokemonSearch;