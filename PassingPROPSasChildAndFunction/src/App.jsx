import Card from './components/Card'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount]=useState(0);
  function OnClickHandler(){
    setCount(count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <Card OnClickHandler={OnClickHandler}>

      </Card>
    </div>
  )
}

export default App
