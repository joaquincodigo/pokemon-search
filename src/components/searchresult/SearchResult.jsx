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
					{
						result.types.map(
							(type) => {
								console.log("This is: ", type)
								return (
									<div>
										<p className='result-type'>{type.type.name}</p>
									</div>
								)
							}
						)
					}
					{/* <p className='result-type'>{result.types[0].type.name}</p> */}
				</div>
			</div>

		</div>


	)
}

export default SearchResult