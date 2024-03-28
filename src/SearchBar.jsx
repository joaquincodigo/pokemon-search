import React from 'react';
import './searchBar.css';
import dummyImage from './dummy-image.png';

function SearchBar() {
	return (
		<form action="">

			<div className="search-bar">

				<input type="text" name="name" id="name" placeholder='Enter the Pokemon name' />

				<div className="type-container">
					<input type="text" name="type" id="type" placeholder='Type Symbol' />
					<div className="type-image-container">
						<img src={dummyImage} id="type-image" />
					</div>
				</div>

			</div>
		</form >
	);
}

export default SearchBar;