import React from 'react'
import dummyImage from '../../images/dummy-image.png'
import "./searchresult.css"

function SearchResult({ result, handleMouseEnter }) {
	return (


		<div className="searchResult" onMouseEnter={(event) => handleMouseEnter(event, result)}>

			<img className='resultImage' src={result.sprites.front_default} />

			<div className="resultTextContainer">
				<p className='resultName'>{result.name}</p>
				<p className='resultType'>{result.types[0].type.name}</p>
				<p className='resultDescription'>{result.description}</p>
			</div>

		</div>


	)
}

export default SearchResult