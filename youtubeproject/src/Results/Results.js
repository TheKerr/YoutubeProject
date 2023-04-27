import React from 'react';
import styles from './Results.css';

function Results(props) {

	const results = props.results;
	const fnLoadVideo = props.loadFunction;
	const getThumbnailURLFromResult = (result) => {
		return result.snippet.thumbnails.default.url;
	}
	const getVideoID = (result => {
		return result.id.videoId;
	})
	const getVideoTitle = (result => {
		return result.snippet.title;
	})
	const getVideoDescription = (result => {
		return result.snippet.description;
	})

	return (
		<div class="results">
			{results.length > 0 && results.map((e, index) => 
				<div className='result' key={index} onClick={() => {fnLoadVideo(getVideoID(e), getVideoTitle(e), getVideoDescription(e))}}>
					<img className='thumbnail' src={getThumbnailURLFromResult(e)} alt="thumbnail"/>
					<p className='result-title'>{getVideoDescription(e)}</p>
				</div>
			)}
		</div>
	)
}

export default Results;