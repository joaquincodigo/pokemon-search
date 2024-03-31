import React from 'react';
import './resultsList.css'
import '../searchresult/SearchResult'
import SearchResult from '../searchresult/SearchResult';

function ResultsList({ results, handleMouseEnter }) {
	return (
		<div className="resultsList">

			<ul>
				{results.map((result, index) => (
					<li key={index}>
						<SearchResult result={result} handleMouseEnter={handleMouseEnter} />
					</li>
				))}
			</ul>

		</div>
	);
}

export default ResultsList;