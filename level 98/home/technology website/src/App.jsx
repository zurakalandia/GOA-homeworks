import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Tech({ name, voltage }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Voltage: {voltage}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <header>
        <h1>Zura Technology</h1>
      </header>
      <div>
        <Tech name='Iron' voltage='200 V'/>
        <Tech name='Toaster' voltage='170 V'/>
        <Tech name='Washing Machine' voltage='150 V'/>
      </div>
    </div>
  )
}

export default App
