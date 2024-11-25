import { useState } from 'react'


import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <div className="w-full h-full bg-red-950 text-white  ">
     <Home/>
    
 </div>
 
 </>
  )
}

export default App
