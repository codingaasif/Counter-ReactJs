import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


  // let counter = 0

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter) {
      setCounter(counter - 1);
    }else{
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Chai aur vite-react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/><br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
