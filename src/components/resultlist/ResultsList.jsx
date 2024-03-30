import React from 'react';
import './resultsList.css'
import dummyImage from '../../images/dummy-image.png'

function ResultsList({ results }) {
	return (
		<div className="results-list">
			<ul>
				{results.map((result, index) => (
					<li key={index}>{result.name}</li>
				))}
			</ul>
		</div>
	);
}

export default ResultsList;