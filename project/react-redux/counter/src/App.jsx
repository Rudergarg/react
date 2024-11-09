
import './App.css'
import Header from './components/header'
import Display from './components/Display'
import Controls from './components/Control'

function App() {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Header></Header>
    <div className="col-lg-6 mx-auto">
      <Display></Display>
      <Controls></Controls>
    </div>
  </div>
    </>
  )
}

export default App
