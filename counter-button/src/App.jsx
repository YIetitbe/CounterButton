
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [incPressed, setIncPressed] = useState(false)
  const [resetPressed, setResetPressed] = useState(false)

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
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
        <button
          className={resetPressed ? 'reset pressed' : 'reset'}
          onMouseDown={() => setResetPressed(true)}
          onMouseUp={() => setResetPressed(false)}
          onMouseLeave={() => setResetPressed(false)}
          onClick={() => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
