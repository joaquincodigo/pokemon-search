import React from 'react';
import './card.css'
import dummyImage from '../../images/dummy-image.png'

function Card({ selectedPokemon }) {
	if (selectedPokemon) {
		return (
			<div className="card">
				<p className="card-title">{selectedPokemon.name}</p>
				<img className="card-image" src={selectedPokemon.sprites.front_default} />
				<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea commodi error amet vero ut, qui nobis tenetur cupiditate asperiores totam corporis quibusdam sapiente quis veritatis labore nisi incidunt voluptatibus.</p>
			</div >
		);
	}
	else {
		return (
			<div className="card">
				<p className="card-title">Loading...</p>
				<img className="card-image" src={selectedPokemon.sprites.front_default} />
				<p className="card-description">Loading...</p>
			</div >
		);
	}
}

export default Card;