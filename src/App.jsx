import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //here counter is a variable and setcounter is a function to update the variable counter 
  //here counter is initialized to 15 and updated in the addvalue function and passed back by setcounter 
  let [ counter ,setcounter] = useState(15)

  //let counter=15
  const addValue=()=>{
   console.log("clicked",counter);
    counter=counter+1
    setcounter(counter)
  }

  const removeValue=()=>{
    console.log("clicked",counter);
    counter=counter-1
    setcounter(counter)
  }


  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add value{counter}</button>
   
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
