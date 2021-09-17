import React, {useState}from 'react'
import './App.css'
function App() {

  const [IsRed, setRed] = useState(false);
  const [Count, setCount] = useState(0);
  const [Size, setSize] = useState(false)
  const [Background, setBackground] = useState(false)

  function red() {
    setRed(!IsRed);
    setBackground(!Background); 
  }

  function font() {
    setSize(!Size)
  }
  function background() {
    setBackground(!Background);    
  }
  function increment() {
    setCount(Count+1);    
  }
  return (
    <div className="hello">
    <h1 className={IsRed ? "red": " "}>Change My Color, Font and Background</h1>
    <h1 className={Size ? "font": " "}>Change My Color, Font and Background</h1>
    <h1 className={Background ? "back": " "}>Change My Color, Font and Background</h1>
    <div className="list">
    <input type="checkbox" onClick={red}/>Red 
    <input type="checkbox" onClick={font}/>Font
    <input type="checkbox" onClick={background}/> Background
    </div>
    <button onClick={red}>Click Me!!</button>
    <button onClick={increment}>Click Me!!</button>
    <h1>{Count}</h1>
      
    </div>
  )
}

export default App
