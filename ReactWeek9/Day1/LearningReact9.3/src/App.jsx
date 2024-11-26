
import './App.css'

import UserCard from './components/UserCard'

function App() {
  

  return (
    <>
      <div className='Containerx'>
        <UserCard Name="Adarsh"  desc="An avid Learner" img="https://media.licdn.com/dms/image/v2/D4D03AQHnI3U3n75SIw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728998356681?e=2147483647&v=beta&t=xM73As2V7zegSq6YtE9kQn1fdbOYYI9qk8MPaMLnX1A" />

        <UserCard Name="Feather" desc="A peacock feather" img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUVFRUXFRUW" />

        <UserCard Name="Linkedin"  desc="An Linkdin Icon"  img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAhFBMVEX///" />
      </div>
    </>
  )
}









export default App
