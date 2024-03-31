import React from 'react'
import dummyImage from '../../images/dummy-image.png'
import "./searchresult.css"

function SearchResult({ result }) {
	return (


		<div className="searchResult">

			<img className='resultImage' src={dummyImage} />
			<p className='resultName'>{result.name}</p>
			<p className='resultType'>{result.type}</p>

		</div>


	)
}

export default SearchResult