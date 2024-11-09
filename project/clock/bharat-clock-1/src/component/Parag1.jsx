import { useEffect, useState } from "react";

function Parag1(){
  const[time,settime]=useState(new Date());
  useEffect(()=>{
    const interval=setInterval(()=>{
      settime(new Date());
    },1000)
    return ()=>{
      clearInterval(interval);
    }

  },[])
  return <h3> This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>
}
export default Parag1;