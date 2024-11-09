import Text from "./Text";
const Text2=({todoitems})=>{
  return {todoitems.map((item)=>( <Text todotext={item.name} tododate={item.date}></Text>))}

};

export default Text2;