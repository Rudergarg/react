import { useState } from "react";

function Input(handleonitem){
  const [itemname,setitemname]=useState("");
  const [itemDate,setitemDate]=useState("");
  const handlechangei=(event)=>{
    setitemname(event.target.value)

  }
  const handlechanged=(event)=>{
    setitemDate(event.target.value)

  }
  const clicked=()=>{
    handleonitem(itemname,itemDate)
    setitemname("");
    setitemDate("");
  }

  


  return <div className="row rgrow">
  <div className="col-sm-4"><input type="text" placeholder="Enter Todo Here" id="" onChange={handlechangei}/></div>
  <div className="col-sm-4"><input type="date" name="" id="" onChange={handlechanged}  /></div>
    <div className="col-sm-2"><button type="button" className="btn btn-success rbutton"onClick={clicked} >Add</button></div>
</div>

}
export default Input;