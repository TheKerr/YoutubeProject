import './App.css';
import Viewer from './Viewer/Viewer';
import Results from './Results/Results';
import Searchbar from './Searchbar/Searchbar';
import { useState } from 'react';
import axios from "axios";

function App() {

	const [videoTitle, setVideoTitle] = useState('');
	const [videoURL, setVideoURL] = useState('');
	const [videoDesc, setVideoDesc] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const searchFunction = (searchText) => {
		//do the api call and set the state to the response
		const requestURL = 'https://www.googleapis.com/youtube/v3/search'
		const maxResults = 5;
		const API_KEY = '';
		axios.get(requestURL + "?id=7lCDEYXw3mM&key=" + API_KEY + "&part=snippet&q='" + searchText + "'&maxResults="+maxResults).then((response) => {
			setSearchResults(response.data.items);
		})
	}

	const loadVideo = (id, title, description) => {
		const youtubeURLPrefix = 'https://www.youtube.com/embed/';
		setVideoTitle(title);
		setVideoURL(youtubeURLPrefix + id);
		setVideoDesc(description);
	}


  return (
    <div className="App">
      <header className="App-header">
	  	<Searchbar searchFunction = {searchFunction}/>
      </header>
	  <div className="App-container">
		<Viewer title={videoTitle} desc={videoDesc} link={videoURL}/>
		<Results results={searchResults} loadFunction = {loadVideo}/>
	  </div>
    </div>
  );
}

export default App;
