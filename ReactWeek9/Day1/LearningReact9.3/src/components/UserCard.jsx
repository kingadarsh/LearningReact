// react arrow function component and babbar told a component is just a function...hence this is the arrow function
import React from 'react'

import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='UserContainer'>
      <p id='UserName'>{props.Name}</p>
      <img id='UserImg' src={props.img} alt="" />
      <p id='UserDesc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
