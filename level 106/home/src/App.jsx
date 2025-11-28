import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, setText] = useState('show')

  return (
    <div>
      <p>{text === 'show' ? 'hello world!' : ''}</p>
      <button onClick={() => setText('show')}>show</button>
      <button onClick={() => setText('hide')}>hide</button>
    </div>
  )
}

export default App
