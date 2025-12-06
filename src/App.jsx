import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[num1, setNum1]=useState("");
  const[num2, setNum2]=useState("");
  const [result, setResult]=useState("");
  function addition(){
setResult(Number(num1)+Number(num2));
  }
    function substraction(){
setResult(Number(num1)-Number(num2));
  }

    function multiplication(){
setResult(Number(num1)*Number(num2));
  }

    function division(){
      if(Number(num2)===0){
        setResult("undefined");
      }
      else{
setResult(Number(num1)/Number(num2)); 
      }
  }
  return (
    <div className="calculator">
     
    <input 
    type="number"
    value={num1}
    onChange={(e) =>  setNum1(e.target.value)}
    className="input-box"
    />
<input 
  type="number"
  value={num2}
  onChange={(e) => setNum2(e.target.value)}
  className="input-box"
  />
<div className="buttons">
<button onClick={addition}>+</button>
<button onClick={substraction}>-</button>
<button onClick={multiplication}>*</button>
<button onClick={division}>/</button>
</div>
<h2>Result: {result}</h2>
    </div>

  )
}

export default App
