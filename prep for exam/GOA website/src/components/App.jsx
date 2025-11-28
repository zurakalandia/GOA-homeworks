import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Main from './mainSection.jsx'

function App() {
  return (
    <div className='wrapper'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      
    </div>
  )
}

export default App
