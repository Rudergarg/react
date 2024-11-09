import { useState } from "react"
import style from "./App.module.css"
import BUTTON from "./COMPNENT/BUTTON";
import Display from "./COMPNENT/Display";


function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal("");
    }else if(buttonText==='='){
      const result=eval(calVal);
      setCalVal(result);
    }else{
      const newDS=calVal+buttonText;
      setCalVal(newDS);

    }
  }

  return <center><div className={style.calculator}>
  <Display Displayval={calVal}></Display>
  <BUTTON onButtonClick={onButtonClick}></BUTTON>
</div></center>

}

export default App
