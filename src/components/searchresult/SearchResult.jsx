import React from 'react'
import dummyImage from '../../images/dummy-image.png'
import "./searchresult.css"

function SearchResult({ result, handleMouseEnter }) {
	return (


		<div className="searchResult" onMouseEnter={handleMouseEnter}>

			<img className='resultImage' src={dummyImage} />

			<div className="resultText">
				<p className='resultName'>{result.name}</p>
				<p className='resultType'>{result.type}</p>
			</div>

		</div>


	)
}

export default SearchResult