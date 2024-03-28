import React from 'react';
import './card.css'
import dummyImage from './dummy-image.png'

function Card() {
	return (
		<div className="card">
			<div className="image-container">
				<img src={dummyImage} alt="Pokemon image" id="image" />
			</div>
			<div className="text-container">
				<textarea className="card-text" readOnly>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe corporis ut sequi consequuntur ab quis eaque architecto impedit ex aliquam?
				</textarea>
			</div>
		</div>
	);
}

export default Card;