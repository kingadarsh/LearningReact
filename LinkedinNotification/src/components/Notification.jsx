import "./Notification.css"
import bell from "../assets/Notification.png"
import { useState } from "react"


const Notification = () => {
    let [count, setCount]=useState(0);

  return (
    <div className="Container">
        
      <img id="bell" src={bell} alt="Bell-Icon" onClick={()=>{setCount(count+1)}}/>
      <div id="Ball"> <p>{count}</p></div>
      
    </div>
  )
}

export default Notification
