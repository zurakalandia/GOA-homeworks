import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.jsx'
import Main from './components/main.jsx'
import Footer from './components/footer.jsx'


function App() {
  return (
    <div className='app-main'>
      <div>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App

