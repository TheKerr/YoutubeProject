import React, { useState } from 'react';
import styles from './Searchbar.css';

function Searchbar(props) {

	const fnSearch = props.searchFunction;
	
	const [searchText, setSearchText] = useState('');


	return (
		<div class="search-bar">
			<label>Video Search</label>
			<input type="text" value={searchText} onInput={(e) => { console.log(e.target.value); setSearchText(e.target.value);}}/>
			<button onClick={() => fnSearch(searchText)}>Search</button>
		</div>
	)
}

export default Searchbar;