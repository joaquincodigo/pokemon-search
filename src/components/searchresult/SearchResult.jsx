import React from 'react'
import dummyImage from '../../images/dummy-image.png'
import "./searchresult.css"

function SearchResult({ result, handleMouseEnter }) {
	return (


		<div className="search-result" onMouseEnter={(event) => handleMouseEnter(event, result)}>

			<img className='result-image' src={result.sprites.front_default} />

			<div className="result-text-container">
				<p className='result-name'>{result.name}</p>
				<div className="types-container">
					<p className='result-type'>{result.types[0].type.name}</p>
				</div>
				<p className='result-description'>{result.description}</p>
			</div>

		</div>


	)
}

export default SearchResult