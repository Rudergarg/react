import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postlist } from "../STORE/posts-list";
const Post=({post})=>{
  const {deletepost}=useContext(postlist)
  return <div className="card postcard" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletepost(post.id)}>
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map(tags=><span className="badge text-bg-primary tagging">{tags}</span>)}
  </div>
  <div className="alert alert-primary bar" role="alert">
  post seen by {post.seen} people
</div>
</div>

}
export default Post;