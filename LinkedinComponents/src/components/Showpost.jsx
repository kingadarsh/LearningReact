import React, { useState } from 'react'
import "./Showpost.css"
import PostComponents from "../components/PostComponents"
import AddPostComponent from "../components/AddPostComponent"


const Showpost = () => {
    let [isVisible , SetIsVisible] = useState(false);


// function onClickHandler(){
//     SetIsVisible(!isVisible)
// }

  return (
    
    <div className='ShowPostBtn'>
        {/* SetIsVisible(!isVisible)-----> Turns False to True */}
        <button id='Btn' onClick={()=>{SetIsVisible(!isVisible)}}>Show Post</button>
        
        {isVisible && 
        <>
            <PostComponents 

                 userImg="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg"
                 name="Adarsh Kathriya"
                 followers="1000 followers"
                 time="14h ."
                 desc="We're ready to bring together developers, creators, and enthusiasts under one roof. Stay tuned for insights, innovations, and inspiration at every turn." 
                 descImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn2O4f85iRUGth0pwLOtyRf-g24gOMKcPbQ&s"
            
                /> 
                
            {/* <AddPostComponent/> */}
        </>}
        

        {/* {   isVisible && <AddPostComponent/>    } */}
      
    </div>
  )
}

export default Showpost
