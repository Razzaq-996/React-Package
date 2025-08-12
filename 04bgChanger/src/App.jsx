import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-200 "  style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap bottom-12 px-2 justify-center'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl items-center'>

        {/* here we cannot directly call setcolor inside on click coz it will return a value but onclick wants a function to be returned so we
        used an arrow function which returns setcolor function itself*/}
           <button onClick={()=>(setColor("red"))} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button
             onClick={()=>(setColor("green"))}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
             <button 
              onClick={()=>(setColor("black"))}
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
              <button 
               onClick={()=>(setColor("white"))}
              className=' px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}>White</button>
               <button 
                onClick={()=>(setColor("olive"))}
               className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
      </div>
    </div>
    </div>
  )
}

export default App
