import React from 'react';

function Results(props) {

	const results = [0,1,2,3]//props.results;

	return (
		<div>
			{results.map((e) => {
				<div className='result' key={e}>
					<img className='thumbnail' src="" alt="thumbnail" />
					<p className='result-title'>result-title</p>
				</div>
			})}
		</div>
	)
}

export default Results;