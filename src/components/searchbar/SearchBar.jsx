import React from 'react';
import './searchBar.css';
import dummyImage from '../../images/dummy-image.png'

function SearchBar({ onNameInputChange, onTypeSelectionChange }) {
	return (
		<div className="search-bar">
			<form action="">

				<div className="name-input-container">
					<input onInput={onNameInputChange} type="text" name="name" id="name-input" placeholder='Sarch by name' />
				</div>

				<div className="type-input-container">
					<select name="type-select" id="type-select" onChange={onTypeSelectionChange}>
						<option class="option-type" value="none" disabled id="default-option" >Select a type</option>
						<option class="option-type" id="any" value="none">Any</option>
						<option class="option-type" value="Bug">Bug</option>
						<option class="option-type" value="Dragon">Dragon</option>
						<option class="option-type" value="Electric">Electric</option>
						<option class="option-type" value="Fighting">Fighting</option>
						<option class="option-type" value="Fire">Fire</option>
						<option class="option-type" value="Flying">Flying</option>
						<option class="option-type" value="Ghost">Ghost</option>
						<option class="option-type" value="Grass">Grass</option>
						<option class="option-type" value="Ground">Ground</option>
						<option class="option-type" value="Ice">Ice</option>
						<option class="option-type" value="Normal">Normal</option>
						<option class="option-type" value="Poison">Poison</option>
						<option class="option-type" value="Psychic">Psychic</option>
						<option class="option-type" value="Rock">Rock</option>
						<option class="option-type" value="Water">Water</option>
					</select>
				</div>
			</form >
		</div>
	);
}

export default SearchBar;