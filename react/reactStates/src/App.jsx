import { useState } from 'react'
import Counter from "./counter";
import Game from "./objects&states/object.jsx"
import Todo from './todo.jsx';
import Lottery from './lottery.jsx';
import Form from './forms/form.jsx';
import Jokes from './useeffect/api.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>States in react</h1>
      <Counter />
      <br /><br />
      <Game />
      <Todo />
      <Lottery/>
      <Form/>
      <Jokes/>
    </>
  )
}

export default App
