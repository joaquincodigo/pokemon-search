import React from 'react';
import './searchBar.css';
import dummyImage from '../../images/dummy-image.png'

function SearchBar({ onNameInputChange }) {
	return (
		<div className="search-bar">
			<form action="">

				<input onInput={onNameInputChange} type="text" name="name" id="name-input" placeholder='Enter the Pokemon name' />
				<input type="text" name="type" id="type-input" placeholder='Type Symbol' />
				<img src={dummyImage} id="type-image" />

			</form >
		</div>
	);
}

export default SearchBar;