import React from "react"


function Que (props){
    




 const answers =  props.answers.map((ans)=>{

    const styles = {
        backgroundColor: ans.isHeld && !ans.isRight &&props.itSubmit  ? "#F8BCBC" 
        :ans.isHeld && !ans.isRight &&!props.itSubmit ? "#D6DBF5" : ans.isRight && props.itSubmit ? "#94D7A2" : ""
        
    }
    return (
        
        <p onClick={()=>(props.Handle(props.id,ans.id))} style={styles} key ={ans.value}>{ans.value}</p>
        
    )
}) 

return(
    <main>

<div className="que">
    
    
        <h3>{props.question}</h3>
        
        <div className="answers">
        {answers}
        </div>
        
    

</div>

</main>
)

}
export default Que