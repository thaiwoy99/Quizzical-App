import React from "react"
import {Link} from "react-router-dom"


function Home(){

const styled ={
    textDecoration:"none",
    color:"white"

}

    return(
<div className="home">
    <h1>Quizzical</h1>
    <p>Some descriptions if needed</p>
    <button><Link to ="/ques"  style={styled}>Start Quiz</Link></button>
</div>

    )
}
export default Home