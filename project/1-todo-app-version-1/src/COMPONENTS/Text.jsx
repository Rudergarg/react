function Text({todotext,tododate}){
  return <div className="row rgrow" >
  <div className="col-sm-4">{todotext}</div>
  <div className="col-sm-4">{tododate}</div>
  <div className="col-sm-2"><button type="button" className="btn btn-danger rbutton">Delete</button></div>
</div>
}
export default Text;


