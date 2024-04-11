import React from 'react';
import './card.css'
import dummyImage from '../../images/dummy-image.png'

function Card({ selectedPokemon }) {
	if (selectedPokemon) {
		return (

			<div className="card">
				<div className="card-title-container">
					<p className="card-title">{selectedPokemon.name}</p>
				</div>
				<div className="card-image-container">
					<img className="card-image" src={selectedPokemon.sprites.front_default} />
				</div>
				<p className="card-description">{selectedPokemon.flavor_text}</p>
			</div >
		);
	}
	else {
		return (
			<div className="card">
				<div className="card-title-container">
					<p className="card-title">Loading...</p>
				</div>
				<div className="card-image-container">
					<img className="card-image" alt="Loading..." />
				</div>
				<p className="card-description">Loading...</p>
			</div >
		);
	}
}

export default Card;