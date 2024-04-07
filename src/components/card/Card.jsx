import React from 'react';
import './card.css'
import dummyImage from '../../images/dummy-image.png'

function Card({ result }) {
	return (
		<div className="card">

			{/* <p className="card-title">{result.name}</p> */}
			<p className="card-title">Placeholder</p>
			<img className="card-image" src={dummyImage} />
			<p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ea commodi error amet vero ut, qui nobis tenetur cupiditate asperiores totam corporis quibusdam sapiente quis veritatis labore nisi incidunt voluptatibus.</p>
		</div >
	);
}

export default Card;