import React from 'react';
import './searchBar.css';
import dummyImage from '../../images/dummy-image.png'

function SearchBar({ onNameInputChange }) {
	return (
		<div className="search-bar">
			<form action="">

				<div className="name-input-container">
					<input onInput={onNameInputChange} type="text" name="name" id="name-input" placeholder='Name' />
				</div>

				<div className="type-input-container">
					<input type="text" name="type" id="type-input" placeholder='Type Symbol' />
				</div>

				<div className="type-input-image-container">
					<img className="type-input-image" src={dummyImage} id="type-image" />
				</div>

			</form >
		</div>
	);
}

export default SearchBar;