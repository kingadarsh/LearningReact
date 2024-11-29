import  { useEffect, useState } from 'react'
import "./Sidebar.css"
const Event = () => {
  let [Category, setCategory]=useState("");
  let [TabData,setTabData]=useState({});

  useEffect( function(){




    
    if(Category){
      console.log(`send the request to the backend to get the data for ${Category}`);
      fetch(`https://api.quotable.io/authors?name=${Category}`).then(async res=>{
        const response = await res.json();
        setTabData(response)
      })
    }

    
  },[Category])

  return (
    <div>
        {/* https://api.quotable.io/authors?name= */}
        <div className='SideBar'>

            <h1 id='SideHeading'>Great Luminaries </h1>

            <div id='Buttons-Container'>
              <button onClick={()=>setCategory("14th Dalai Lama")} style={{backgroundColor : Category=="14th Dalai Lama" ?"#808e9b":'#ffffff' }} className='ButtonsCategory' id='age' >Dalai Lama</button>
              <button onClick={()=>setCategory("Aesop")} style={{backgroundColor : Category=="Aesop" ?"#808e9b":'#ffffff' }} className='ButtonsCategory' id='alone' >Aesop</button>
              <button onClick={()=>setCategory("The Buddha")} style={{backgroundColor : Category=="The Buddha" ?"#808e9b":'#ffffff' }} className='ButtonsCategory' id='amazing' >The Buddha</button>
              <button onClick={()=>setCategory("alan-watts")} style={{backgroundColor : Category=="alan-watts" ?"#808e9b":'#ffffff' }} className='ButtonsCategory' id='anger' >Alan Watts</button>
              <button onClick={()=>setCategory("Abraham Lincoln")} style={{backgroundColor : Category=="Abraham Lincoln" ?"#808e9b":'#ffffff' }} className='ButtonsCategory' id='architecture' >Abraham Lincoln</button>

              <button onClick={()=>setCategory("Albert Einstein")} style={{backgroundColor : Category=="Albert Einstein" ?"#808e9b":'#ffffff' }} className='ButtonsCategory' id='attitude' >Albert Einstein</button>
             
            </div>

        </div>   

        <div id='QuotesContainer'>
          <div id='InnerContent'>
              {TabData.results && TabData.results.length > 0 ? (
                 <div id='ContentHandPre'>
                    <h2 id='HeadingAuthor'>Author Information:</h2>

                    <div className='Name'>
                      <h1 id='Name'>{TabData.results[0].name}</h1>
                    </div>
                    
                    <div className='MoreLink'>
                     <a href={TabData.results[0].link}>Read More About - {TabData.results[0].name}</a>

                    </div>

                    <div className='Desc'>
                      <b id='Desc'>{JSON.stringify(TabData.results[0].description, null, 2)}</b>
                    </div>
                    
                    <div className='Bio'>
                      <pre id='Bio' >{JSON.stringify(TabData.results[0].bio)}</pre>
                    </div>
                    

                   
                    
                </div>
              ) : (
                     <p>Select a category to see the data.</p>
                  )}
          </div>

      </div>
    </div>
        
    
  )
}

export default Event




