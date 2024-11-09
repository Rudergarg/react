import { useContext } from "react";
import Post from "./Post";
import {postlist} from "../STORE/posts-list";

const Postlist=()=>{
  const {PostList}=useContext(postlist)
  return <>
  {PostList.map((post)=><Post key={post.id}
  post={post}/>)}
  
  </>

}
export default Postlist;