import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/assets/vite.svg'
import './App.css'
import everestImage from './assets/mountEverest.jpg'

let app = 'Zura';

function App() {
  return (
    <>
      <h1>{app}</h1>
      <img src={everestImage} alt="everestImage"/> <br />
      <button onClick={() => {
        console.log('Mount Everest is the tallest mountain on earth')}}>Click for info</button> <br />
      <img src="/assets/lomi1.jpg" alt="lomi" />
    </>
  )
}

export default App;
