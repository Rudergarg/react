import { createContext, useReducer } from "react";

export const postlist=createContext({
  PostList:[],
  addpost:()=>{},
  deletepost:()=>{},
});
const postreducer=(current,action)=>{
  let newpostlist=current;
  if(action.type==="delete_post"){
    newpostlist=current.filter(post=>post.id!==action.payload.postid);
  }
  else if(action.type==="add_post"){
    newpostlist=[action.payload, ...current];
  } 
  return newpostlist;
}
const Postprovider=({children})=>{
 const[PostList,dispatchPostList] =useReducer(postreducer,[])
 
 const deletepost=(postid)=>{
  dispatchPostList({
    type:"delete_post",
    payload:{postid}
  })
 }
 const addpost=(posttitle,postbody,posttags,postseen)=>{
  dispatchPostList({
    type:"add_post",
    payload:{
      id:Date.now(),
    title:posttitle,
    body:postbody,
    tags:posttags,
    seen:postseen,
    }
  })
 }

  return <postlist.Provider value={{PostList,addpost,deletepost,}}>{children}</postlist.Provider>
  
}

export default Postprovider;