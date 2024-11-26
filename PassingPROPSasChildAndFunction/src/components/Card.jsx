import React from 'react'

const Card = (props) => {
  return (
    <div>
      <button onClick={props.OnClickHandler}>Click Me</button>
      {props.children}
    </div>
  )
}

export default Card
