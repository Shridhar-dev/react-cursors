import { useState } from 'react';
import './App.css';
import { EmojiCursor } from './lib';


function App() {
  
  const [emoji, setEmoji] = useState(' ')

  return (
    <div className="App">
      <EmojiCursor 
        emoji={emoji} 
      
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
          onMouseEnter={()=>{setEmoji('🚀')}}
          onMouseLeave={()=>{setEmoji(' ')}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
