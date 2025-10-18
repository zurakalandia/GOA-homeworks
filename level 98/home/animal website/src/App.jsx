import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Animal({ name, type }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Type: {type}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <header>
        <h1>Zura Animals</h1>
      </header>
      <div className='carList'>
        <Animal name='Horse' type='Mammal'/>
        <Animal name='Puffer Fish' type='Fish'/>
        <Animal name='Frog' type='Amphibian'/>
      </div>
    </div>
  )
}

export default App
