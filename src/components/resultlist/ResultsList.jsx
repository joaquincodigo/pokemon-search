import React from 'react';
import './resultsList.css'
import '../searchresult/SearchResult'
import SearchResult from '../searchresult/SearchResult';

function ResultsList({ results }) {
	return (
		<div className="results-list">
			<ul>
				{results.map((result, index) => (
					<li key={index}>
						<SearchResult result={result} />
					</li>
				))}
			</ul>

		</div>
	);
}

export default ResultsList;