import React from 'react';
import './searchBar.css';
import dummyImage from '../../images/dummy-image.png'

function SearchBar({ onNameInputChange }) {
	return (
		<form action="">

			<div className="search-bar">

				<input onInput={onNameInputChange} type="text" name="name" id="name-input" placeholder='Enter the Pokemon name' />

				<div className="type-container">
					<input type="text" name="type" id="type-input" placeholder='Type Symbol' />
					<div className="type-image-container">
						<img src={dummyImage} id="type-image" />
					</div>
				</div>

			</div>
		</form >
	);
}

export default SearchBar;