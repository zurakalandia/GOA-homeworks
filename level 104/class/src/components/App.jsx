import { useState } from 'react'
import Home from './Home'
import './App.css'
import Contacts from './Contacts';


function App() {
  const path = window.location.pathname;



  switch (path) {
    case '/contacts':
      return <Contacts />
  }

  const [count, setCount] = useState(0);

  return (
    <div>
      <Home value='hello' setCount={setCount}>{count}</Home>
    </div>
  )
}

export default App
