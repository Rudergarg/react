import style from "./Display.module.css"
function Display({Displayval}){
  return<input className={`${style.Display} text-end`} type="text" name="" id="" value={Displayval} readOnly/>
}
export default Display;