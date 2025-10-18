import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import natureImage from './assets/nature1.webp'

let greeting = 'Welcome to React!';
let subtraction = () => {
  let num1 = Math.floor(Math.random() * 11);
  let num2 = Math.floor(Math.random() * 11);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

setInterval(() => console.log(new Date().toLocaleTimeString('en-BG')), 1000);


function App() {
  const [text, setText] = useState('');
  

  return (
    <div>
      <h2>{greeting}</h2>
      <img src={natureImage} alt="Error" /> <br/>

      <input id='userName' type="text" placeholder='Enter your name...' onChange={(e) => {setText(e.target.value)}}/>
      
      <button disabled={!text} onClick={() => {console.log(text)}}>Submit</button> <br />
      <button onClick={subtraction}>subtract</button>

    </div>
  )
}

export default App
