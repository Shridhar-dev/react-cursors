import './App.css';
import CircleCursor from './lib/components/CircleCursor';

function App() {
  

  return (
    <div className="App">
      <CircleCursor 
        dotWidth="2rem"
        dotHeight="2rem"
        circleWidth="5rem"
        circleHeight="5rem"
        borderStyle="dotted"
        color="white"
        borderWidth="3px"
        circleDay="0.1s"
        dotDelay="0.05s"
      />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
