import React from 'react';
import './searchBar.css';
import dummyImage from '../../images/dummy-image.png'

function SearchBar({ onNameInputChange }) {
	return (
		<div className="search-bar">
			<form action="">

				<div className="name-input-container">
					<input onInput={onNameInputChange} type="text" name="name" id="name-input" placeholder='Enter the Pokemon name' />
				</div>

				<div className="type-input-container">
					<input type="text" name="type" id="type-input" placeholder='Type Symbol' />
				</div>

				<img src={dummyImage} id="type-image" />

			</form >
		</div>
	);
}

export default SearchBar;