import { useDispatch } from "react-redux";

const Controls=()=>{
  const dispatch=useDispatch();
  const handleincrement=()=>{
    dispatch({type:"INCREMENT"})

  }
  const handledecrement=()=>{
    dispatch({type:"DECREMENT"})
  }
  return <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
  <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleincrement}>+1</button>
  <button type="button" className="btn btn-dark btn-lg px-4 gap-3" onClick={handledecrement}>-1</button>
</div>

};
export default Controls;