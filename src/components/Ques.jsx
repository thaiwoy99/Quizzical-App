import React from "react"
import Que from "./Que"
import urid from "urid"


function Ques(){
    const [ques, setQues] = React.useState([])
    const [dis, setDis] = React.useState(false)
    const [sub , setSub] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [che,setChe] =React.useState(false)
    const [leng,setleng] =React.useState(false)

    
    
  React.useEffect(()=>{
    
    async function getData (){
  const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
  const data = await res.json() 
  const qui =[...data.results]
      
      const newArr = []
      for(let i=0; i<qui.length;i++){
        
        const answer= [...qui[i].incorrect_answers,qui[i].correct_answer]
        answer.sort(()=>Math.random()-0.5)
        const answ = answer.map((ans)=>{
          return{
            isHeld:false,
            value:ans,
            id:urid(8, 'alphanum'),
            isRight:false,
          }
        })  
      const val = {...qui[i],answers:answ,id:urid(6,"alpha")}
      newArr.push(val)
    
      }




  
  setQues(newArr)
        
     }
     getData()
     
    
  },[])
  
  
  
  
  
  function chooseAns(iD1,iD2){
  
  
  
  setQues(prev=>{
    const selected= prev.map(que=>{
      if(que.id==iD1){
      const select = que.answers.map(ans=>{
        return ans.id === iD2 ?{...ans,isHeld:true}:{...ans,isHeld:false}
  
      })
  
      return {...que,answers:select}
    }
    else{
      return que
    }
    })
  return selected
  })
  
  
  }
  
  
  function submit(){
    setQues(prev=>{
  
      const itRight=prev.map(que=>{
        const Right= que.answers.map(ans=>{
          
          
          return ans.value === que.correct_answer ? {...ans,isRight:true}: ans
          
  
        })
        return {...que,answers:Right,}
      })
      return itRight
    })
    setSub(true)
  
    
  }
  React.useEffect(()=>{
    for(let y =0; y<ques.length;y++){
      let tai = ques[y].answers
      for(let i =0; i<tai.length;i++){
        if(tai[i].isHeld && tai[i].value ===ques[y].correct_answer){
          setScore(prev=>prev+1)
        }
  
      }
      
    }
    
  },[sub])
  
  function Reload (){
    window.location.reload()
}
  
  const Page2 = ques.map(que=>{
    return(
    <Que key = {que.question} 
    {...que}
    Handle = {chooseAns}
    itSubmit ={sub}
    leng = {leng}
    />
    )
  })

  const styled = {
backgroundColor:ques.length > 0 ? "#F5F7FB" : " "
}
  const display = {display: ques.length>0 ? "block" :"none"}
  return (
<main className="container">
    
<div className="que-cont" style ={styled}>
  <div className="cont">
{Page2}
</div>

<div className="submit">
   { sub && <p >You scored {score}/5 correct answers </p>}
 {!sub &&<button className="ans-check" onClick= {submit} style ={display}>Check Answers</button>}
{ sub && <button  className = "ans-check" onClick = {Reload}>Play Again</button>}
</div>
</div>
</main>
  )
}
export default Ques