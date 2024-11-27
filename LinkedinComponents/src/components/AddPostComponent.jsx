import React, { useState } from 'react'
import "./AddPostComponent.css"
import PostComponents from "./PostComponents"



const AddPostComponent = () => {
    let [posts, setPost] = useState([])

    function addPost(){
        setPost([...posts,{            
            userImg:"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
            name:"Adarsh Kathriya",
            followers:"1000 followers",
            time:"14h .",
            desc:"We're ready to bring together developers, creators, and enthusiasts under one roof. Stay tuned for insights, innovations, and inspiration at every turn." ,
            descImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThn2O4f85iRUGth0pwLOtyRf-g24gOMKcPbQ&s"            
    
        }])
    }
// Creating a new array "Post__Component" based on assests of array "post" 
    const Post__Component=posts.map(post=><PostComponents
    userImg={post.userImg}
    name={post.name}
    followers={post.followers}
    time={post.time}
    desc={post.desc}
    descImg={post.descImg}/>)

  return (
    <div>
      <button id='AddBtn' onClick={addPost}>Add Post</button>
      <div>
        <div>
            { Post__Component }


            
        </div>
      </div>
    </div>
  )
}

export default AddPostComponent
