
import { useState } from 'react'
import './App.css'

function App() {
const [counter,updateCounter]=useState(0)
const [foot,updatefoot]=useState(1)
function add() {
  updateCounter(counter+foot)
  
}
function decrease() {
  if(!(counter-1<0)){
    updateCounter((prev)=>prev-foot)
  }

}
function increasefoot() {
  updatefoot(foot+1)
  
}
function decreasefoot() {
  if(!(foot-1<0)){
    updatefoot(foot-1)
  }

  
  
}

  return (
    <>
     <h1>First App with react</h1>
     <h2>Counter App : {counter}</h2>
     <button onClick={add}>Add Counter</button>{"      "}
     <button onClick={decrease}>Remove counter</button>
     <div className='row'>
     <p>Footer :  {foot}</p>
     <button onClick={increasefoot}>+</button>
     
     <button onClick={decreasefoot}>-</button>
     </div>
    
    
    </>
  )
}

export default App
