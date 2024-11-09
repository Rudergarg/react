import { useSelector } from "react-redux";

const Display=()=>{
  const counter=useSelector((store)=>store.counter)
  return <p classname="lead mb-4">counter value {counter}</p>

};
export default Display;