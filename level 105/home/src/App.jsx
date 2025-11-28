import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.jsx'
import Samsung from './components/samsung.jsx'
import Iphone from './components/iphone.jsx'
import Xiaomi from './components/xiaomi.jsx'
import Huawei from './components/huawei.jsx'
import Personal from './components/personal.jsx'

function App() {
  const [page, setPage] = useState('home');


  function router() {
    switch(page) {
    case 'home':
      return <Home />
    case 'samsung':
      return <Samsung />
    case 'iphone':
      return <Iphone />
    case 'xiaomi':
      return <Xiaomi />
    case 'huawei':
      return <Huawei />
    case 'personal':
      return <Personal />
    default:
      return 
      
      <div>
        Error 404. Page not found
      </div>
    }
  }
  

  return (
    <div>
      <ul>
        <li onClick={() => setPage('home')}>home</li>
        <li onClick={() => setPage('samsung')}>samsung</li>
        <li onClick={() => setPage('iphone')}>iphone</li>
        <li onClick={() => setPage('xiaomi')}>xiaomi</li>
        <li onClick={() => setPage('huawei')}>huawei</li>
        <li onClick={() => setPage('personal')}>personal</li>

        {router()}
      </ul>
    </div>
  )
}

export default App
