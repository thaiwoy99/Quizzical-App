import React from "react"
import {Routes,Route} from "react-router-dom"

import Home from "./components/home"
import Ques from "./components/Ques"



function App (){


 

/** 
const [allMemes, setAllMemes] = React.useState([])
    console.log(allMemes)
    
    
    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    */
   

  return(
    <main>


<Routes>
  <Route  path="/" element= {<Home />}/>
    
  
  <Route  path="/ques" element = {<Ques/>}/>
  
  
</Routes>



    </main>
  )
}
export default App