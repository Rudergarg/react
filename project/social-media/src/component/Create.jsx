import { useContext, useRef } from "react";
import { postlist } from "../STORE/posts-list";

const Create =()=>{
  const{addpost}=useContext(postlist)
  const title=useRef();
  const body=useRef();
  const tags=useRef();
  const seen=useRef();
  const handlesubmit=(event)=>{
    event.preventDefault();
    const posttitle=title.current.value;
    const postbody=body.current.value;
    const posttags=tags.current.value.split(" ");
    const postseen=seen.current.value;
    addpost(posttitle,postbody,posttags,postseen);
    title.current.value="";
    body.current.value="";
    tags.current.value="";
    seen.current.value="";
  }


  return <form className="CREATE" onSubmit={handlesubmit}>
  <div classname="mb-3">
    <label for="title" classname="form-label">Post Title</label>
    <input type="text" classname="form-control" id="Post Title" ref={title}placeholder="How are u feeeling today...."/>
  </div>
  
  <div classname="mb-3">
    <label for="tags" classname="form-label">Post tags</label>
    <input type="text" classname="form-control" id="tags" ref={tags} placeholder="tags for ur post...."/>
  </div>
  <div classname="mb-3">
    <label for="seen" classname="form-label">Post seen</label>
    <input type="text" classname="form-control" id="seen" ref={seen}placeholder="post is seen by...."/>

  </div>
  <div classname="mb-3">
    <label for="body" classname="form-label">Post Content</label>
    <textarea type="text" classname="form-control" id="body" ref={body}placeholder="tell us something more ...."/>
  </div>
  
  <button type="submit" classname="btn btn-primary">Post</button>
</form>
}
export default Create;