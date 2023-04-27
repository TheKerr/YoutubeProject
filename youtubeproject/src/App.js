import './App.css';
import Viewer from './Viewer/Viewer';
import Results from './Results/Results';
import Searchbar from './Searchbar/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
	  <div className="App-container">
		<Searchbar />
		<Viewer />
		<Results />
	  </div>
    </div>
  );
}

export default App;
