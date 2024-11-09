import Headers from './component/headers'
import './App.css'
import Sidebar from './component/sidebar'
import Footers from './component/footers'
import Create from './component/create'
import Postlist from './component/postlist'
import Post from './component/Post'
import { useState } from 'react'
import Postprovider from './STORE/posts-list'

function App() {
  const[selected,setslected]=useState(onclick)
  

  return(
    <Postprovider>
    <div className="cantain">
      <Sidebar className="sidebar" selected={selected} setselected={setslected}></Sidebar>
      <div className='content'>
      <Headers></Headers>
      {selected==="Home"?<Postlist></Postlist>:<Create></Create>}
      
      <Footers></Footers>
      </div>
      
    </div>
    </Postprovider>
  )
}

export default App
