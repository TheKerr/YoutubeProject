import React from 'react';
import styles from './Viewer.css';

function Viewer(props) {

	const curLink = props.link;
	const curTitle = props.title;
	const curDesc = props.desc;

	return (
		<div class="youtube-viewer">
			<iframe width="420" height="315" title="youtube-viewer"
				src={curLink}>
			</iframe> 
			<div>
				<div className='viewer-title'>{curTitle}</div>
				<div className='viewer-description'>{curDesc}</div>
			</div>
		</div>
	)
}

export default Viewer;