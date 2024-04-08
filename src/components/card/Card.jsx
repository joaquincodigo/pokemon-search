import React from 'react';
import './card.css'
import dummyImage from '../../images/dummy-image.png'

function Card({ selectedPokemon }) {
	if (selectedPokemon) {
		return (
			<div className="card">
				<p className="card-title">{selectedPokemon.name}</p>
				<img className="card-image" src={selectedPokemon.sprites.front_default} />
				<p className="card-description">{selectedPokemon.flavor_text}</p>
			</div >
		);
	}
	else {
		return (
			<div className="card">
				<p className="card-title">Loading...</p>
				<img className="card-image" alt="Loading..." />
				<p className="card-description">Loading...</p>
			</div >
		);
	}
}

export default Card;