import { useState } from 'react'
import Counter from "./counter";
import Game from "./objects&states/object.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>States in react</h1>  
        <Counter/>
        <br /><br />
        <Game />

    </>
  )
}

export default App
