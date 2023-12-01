import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("")

  const clickHandler =(e)=>{
      setResult(result.concat(e.target.value))
  }
  const clearHandler = () => {
     setResult("")
  }
  const calculate = () =>{
    setResult(eval(result).toString())
  }

  return (
    <>
      <div className='cal'> 
        <input type="text" placeholder='0' className='display' value={result} />
        <input type="button" value="9" onClick={clickHandler}/>
        <input type="button" value="8" onClick={clickHandler}/>
        <input type="button" value="7" onClick={clickHandler}/>
        <input type="button" value="6" onClick={clickHandler}/>
        <input type="button" value="5" onClick={clickHandler}/>
        <input type="button" value="4" onClick={clickHandler}/>
        <input type="button" value="3" onClick={clickHandler}/>
        <input type="button" value="2" onClick={clickHandler}/>
        <input type="button" value="1" onClick={clickHandler}/>
        <input type="button" value="0" onClick={clickHandler}/>
        <input type="button" value="." onClick={clickHandler}/>
        <input type="button" value="+" onClick={clickHandler}/>
        <input type="button" value="-" onClick={clickHandler}/>
        <input type="button" value="*" onClick={clickHandler}/>
        <input type="button" value="/" onClick={clickHandler}/>
        <input type="button" value="%" onClick={clickHandler}/>
        <input type="button" value="Clear" className='clear' onClick={clearHandler}/>
        <input type="button" value="=" className='res' onClick={calculate}/>
      </div>
    </>
  )
}

export default App
