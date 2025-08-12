import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const[numberAllowed,setNUmberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")

   //call back is used to put function definition memory between re-rendering..(rendering==mounting)...
  //syntax:useCallback(fn,dependencies)...

  const passwordGenerator = useCallback(()=>{

      let pass=""
      let str=
      "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      if(numberAllowed)
        str+="0123456789"
      if(charAllowed)
        str+="!@#$%^&*()_"
      for( let i=1;i<=length;i++){
        let char=Math.floor((Math.random()*str.length))
        pass+=str.charAt(char)
      }
      
      setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordtoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  
  },[password])
 


// useEffect is a React Hook that lets you run side effects in your function components.
//syntax:useEffect(()=>{...},[])

// Side effects = anything that affects something outside of your component’s render output, like:
// Fetching data from an API
// Updating the document title
// Setting up timers
// Subscribing to events

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


const passwordRef = useRef(null)

// useRef is a React Hook that lets you:
// Hold a mutable value that does not cause a re-render when it changes.
// Reference a DOM element directly.
// It’s like a “box” that can store a value across renders, without triggering updates.




return (
  <div className='w-full h-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 items-center mx-10'>
    <h1 className='text-white text-center mb-4'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden'>
      <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 items-center'
        placeholder='Password'
        ref={passwordRef}
        
      />
      <button 
      onClick={copyPasswordtoClipboard}
      className='outline-none bg-blue-700 shrink-0 px-3 py-0.5 text-white'>copy</button>
    </div>
    <div className='text-sm gap-x-2 flex'>
      <div className='flex  items-center gap-x-1 py-2'>
        <input 
        type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer'

// e is the event object automatically passed by React when the change happens.

// e.target refers to the HTML element that triggered the event (the input box).

// .value gets the current value of that input field.

        onChange={(e)=>{
          setlength(e.target.value)
        }}
        />
         <label >length:{length}</label>
      </div>
      <div className='items-center  gap-x-1 flex'>
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={()=>{
            setNUmberAllowed((prev)=>!prev)
           }}
           />
           <label htmlFor="numberInput">Numbers</label>
      </div>
       <div className='items-center  gap-x-1 flex'>
          <input
           type="checkbox"
           defaultChecked={charAllowed}
           id='characterInput'
           onChange={()=>{
            setCharAllowed((prev)=>!prev)
           }}
           />
           <label htmlFor="characterInput">Characters</label>
      </div>

    </div>
  </div>
)

}

export default App
