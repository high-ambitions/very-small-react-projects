import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [timer,setTimer]=useState(0);
  const [running,setRunning]=useState(false);
  const [currInp,setCurrInp]=useState(0);
  
  
    useEffect(()=>{
      
      
      if(running){  
        console.log(timer);
        let clock=setInterval(()=>{
          if(timer==0){
             setTimer(0);setRunning(false);
          }
          else{
            setTimer(c=>c-1);
          }

        },1000);
        return function(){
           clearInterval(clock);
        }
    }
    },[timer,running]);
     
  

  return (
    <div>
      <div><Input setCurrInp={setCurrInp}/></div>
      <div>Running {timer}</div>
      {((!running) && (!timer))?<StartTimer setRunning={setRunning} setTimer={setTimer} currInp={currInp}/>: null}
      {((!running) && (timer))?<ResumeTimer setRunning={setRunning} setTimer={setTimer} currInp={currInp}/>: null}
      {(running)?<PauseTimer setRunning={setRunning}/>: null}
      <ResetTimer setRunning={setRunning} setTimer={setTimer} />
    </div>
  )

}

function Input({setCurrInp}){
  return (<input type="text" onChange={e=>{setCurrInp(e.target.value);}}></input>);
}

function StartTimer({setRunning,setTimer,currInp}){
  return (<button onClick={()=>{setRunning(true);setTimer(currInp)}}>Start</button>);
}
function ResumeTimer({setRunning}){
  return (<button onClick={()=>{setRunning(true);}}>Resume</button>);
}

function PauseTimer({setRunning}){
  return (<button onClick={()=>{setRunning(false);}}>Pause</button>);
}

function ResetTimer({setRunning,setTimer}){
  return (<button onClick={()=>{setRunning(false);setTimer(0);}}>Reset</button>);
}


export default App
