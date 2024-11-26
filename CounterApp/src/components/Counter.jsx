import React, { useState } from 'react'
import './Coounter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    
    <div className='CounterContainer'>
         <p id='ContentPara'>The value of the counter is {count}</p>
        <button  id='ButtonCounter' onClick={()=>{setCount(count+1)}}>Counter</button>

      

    </div>
  )
}

export default Counter
