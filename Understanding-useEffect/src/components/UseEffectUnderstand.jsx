import React, { useEffect, useState } from 'react'
import "./c.css"
const UseEffectUnderstand = () => {
    let [count, setCount] =useState(0);
    function func (){
        setCount((currentlyUsed)=>{
            return currentlyUsed+1;
        });
    }
    useEffect(function(){
        setInterval(func,1000);
    },[])

    
  return (
    <div className='container'>
      {count}
    </div>
  )
}

export default UseEffectUnderstand
