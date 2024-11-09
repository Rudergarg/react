import {createStore} from "redux";
const INITIAL={
  counter:0
}
const contreducer=(store=INITIAL,action)=>{
  if(action.type==="INCREMENT"){
    return {counter:store.counter+1}
  }else if(action.type==="DECREMENT"){
    return {counter:store.counter-1}
  }
  return store;
}

const counterstore=createStore(contreducer);
export default counterstore;