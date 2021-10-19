import { useEffect, useState } from 'react';
import './App.css';
import { CircleCursor } from './lib';

import img from './logo192.png'

function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="App">

      <header className="App-header">
        <p 
          className="hover-detect"
        > Hover me </p>
      </header>
      <header className="App-header">
        <p 
          className="hover-detect"
        > Hover me </p>
      </header>
      {
        loaded ? <CircleCursor initial={{circleSize:'5rem',dotSize:'2rem'}} hover={{circleSize:'1rem'}}/> : <br/>
      }
    </div>
  );
}

export default App;
