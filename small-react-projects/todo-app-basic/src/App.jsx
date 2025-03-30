import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [todos,setTodos]=useState([]);
  
  

  return (
    <div>
      <h1> Todo -  App </h1>
       <Input setTodos={setTodos}/>
       {todos.map((task,index)=><Board task={task} key={index} index={index} todos={todos} setTodos={setTodos}/>)}
    </div>


  )

}

function Input({setTodos}){
  
  const [Inp,setInp]=useState("");

  return (
     
    <div>
      <input type="text" placeholder="AddTodo" value={Inp} onChange={e=>setInp(e.target.value)}></input>
      <button onClick={()=>{
        if(Inp!=""){
        setTodos(c=>[...c,Inp]);
        }
      }}>submit</button>
    </div>

  )

}


function Board({task,index,todos,setTodos}){

  function taskDel(){
       todos.splice(index,1);
       const newTodos=[...todos];
       setTodos(newTodos);
  }

  return (<div>
         {task} <button onClick={taskDel}><b>Delete</b></button>
    </div>);
}

export default App
