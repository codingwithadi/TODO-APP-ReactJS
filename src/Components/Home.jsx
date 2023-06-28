import React,{useState} from 'react'
import "./HeaderStyle.css"
const Home = () => {

    //THis is useState hook 
    const[inputValue, setInputValue] = useState(0);

    const increment = () => {
        setInputValue(inputValue + 1);
    }

    const decrement = () =>{
        setInputValue(inputValue - 1);
    }

  return (
    <>
    <input 
    type="number" placeholder='enter something' className='input1' value={inputValue} readOnly></input>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Home;