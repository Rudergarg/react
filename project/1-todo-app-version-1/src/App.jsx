import AppName from "./COMPONENTS/APPNAME"
import Input from "./COMPONENTS/Input";

import Text from "./COMPONENTS/Text"
import "./App.css";
import { useState } from "react";
import Text2 from "./COMPONENTS/text2";
function App() {
  const itodoitems=[
    {
    name:"hloo",
    duedate:"12/10/12"
    }

  ]
  const [todoitems,settodoitem]=useState(itodoitems);
  const handleonitem=(itemname,itemdate)=>{
    const addtodo=[...todoitems,{name:itemname,duedate:itemdate},
    ];
    settodoitem(addtodo);
  };
 

  return <center>
    <AppName></AppName>
    <div className="container text-center">
    <Input onnewitem={handleonitem}></Input>
    <div className="text">
    <Text2 todoitems={todoitems}></Text2>
    </div>

    
    
  </div>
  </center>
  
}

export default App
