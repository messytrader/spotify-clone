import Display from "./components/Display"
import Navbar from "./components/Navbar"
import Player from "./components/Player"


function App() {
 

  return (
   <>
 <div className='h-screen '>
    <div className='h-[90%] flex'> 
    <Navbar/>
    <Display/>
    </div>
    <Player/>
   
  </div>
  

   
   </>
  )
}

export default App
