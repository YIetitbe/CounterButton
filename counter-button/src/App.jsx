import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [incPressed, setIncPressed] = useState(false)
  const [resetPressed, setResetPressed] = useState(false)
  const [joke, setJoke] = useState("");  

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);  
    } catch (error) {
      console.error("Errore nell'API:", error);
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
    fetchJoke(); 
  };

  // Funzione per resettare il contatore
  const resetCounter = () => {
    setCounter(0);
    setJoke(""); 
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter-row">
        <span className={counter === 0 ? 'counter zero' : 'counter'}>Counter: {counter}</span>
      </div>

      <div className="button-row">
        <button
          className={incPressed ? 'inc pressed' : 'inc'}
          onMouseDown={() => setIncPressed(true)}
          onMouseUp={() => setIncPressed(false)}
          onMouseLeave={() => setIncPressed(false)}
          onClick={incrementCounter} 
        >
          Increment
        </button>
        <button
          className={resetPressed ? 'reset pressed' : 'reset'}
          onMouseDown={() => setResetPressed(true)}
          onMouseUp={() => setResetPressed(false)}
          onMouseLeave={() => setResetPressed(false)}
          onClick={resetCounter}  
        >
          Reset
        </button>
      </div>
      {joke && (
        <div className="joke">
          <h2>Chuck Norris Joke:</h2>
          <p>{joke}</p>
        </div>
      )}
    </div>
  )
}

export default App
