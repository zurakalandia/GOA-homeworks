import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Car({ name, year }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Year: {year}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <header>
        <h1>Zura Cars</h1>
      </header>
      <div className='carList'>
        <Car name='Tesla Model S' year='2023'/>
        <Car name='BMW M3' year='2022'/>
        <Car name='Ford Mustang' year='2021'/>
      </div>
    </div>
  )
}


export default App
