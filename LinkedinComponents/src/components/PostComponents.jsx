import React from 'react'
import earthIcon from "../assets/earth.svg"
import "./PostComponents.css"
const PostComponents = (props) => {
  return (
    <div className='Container' >

        <div id='TopBar'>
            <div id='UserImgDiv' >
                <img id='UserImg' src={props.userImg} alt="" />
            </div>
            <div id='Intro'>

                <h1 id='Name'>{props.name}</h1>
                 <p id='Followers'> {props.followers}</p>
                 <div id='Time-Earth'>
                    <p id='ParaTime'>{props.time}</p>
                    <img id='EarthIcon' src={earthIcon} alt="Earth Icon" />
                 </div>
            </div>
        </div>

        <div id='DescBar'>
            <p id='ParaDesc'>
                {props.desc}
             </p>
             <img  id='DescImg' src={props.descImg} alt="" />

        </div>

    



    </div>
  )
}

export default PostComponents


// "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg"