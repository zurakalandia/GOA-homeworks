import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let text = 'hello';
  let array = [1, 2, 3, 4, 5];
  let big = 'bigParagraph';
  let small = 'smallParagraph';
  let num = 5
  let message = 'Hello!'


  return (
    <div>
      <h1 className='heading'>Hello</h1> {/*react uses className, while html uses class*/}
      <p className='paragraph'>hello</p> {/*this is because class is a reserved keyword in javascript used for creating classes*/}
      <a href="" className='link'>empty link</a> {/*react converts className to class when JSX is rendered*/}

      <h1 />
      <p />
      <a href="" />
      <img src="#" alt="" />
      <button />

      <h1>{text}</h1>
      <h2>1 + 2 = {1 + 2}</h2>
      <h2>first: {array[0]}</h2>
      <h2>second: {array[0]}</h2>
      <h2>third: {array[2]}</h2>

      <h3>hello! {text}!</h3>
      <p className={big}>Big paragraph</p>
      <p className={small}>Small paragraph</p>
      <h1>num: {num}</h1>
      <h1>message: {message}</h1>
    </div>
  )
}

export default App
