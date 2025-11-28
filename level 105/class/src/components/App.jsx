import { useState } from 'react'
import './App.css'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Home from './home.jsx'

const path = window.location.pathname
const CustomLink = ({children, location}) => {
  return(
    <a href={location}>{children}</a>
  )
}

const router = () => {
  switch(path){
    case '/page1':
      return <Page1 />
    case '/page2':
      return <Page2 />
    case '/page3':
      return <Page3 />
    case '/':
      return <Home />
  }
  return <div>404 page not found</div>
}



function App() {
  return (
    <div>
      <ul>
        <li><CustomLink location='/'>home</CustomLink></li>
        <li><CustomLink location='/page1'>page1</CustomLink></li>
        <li><CustomLink location='/page2'>page2</CustomLink></li>
        <li><CustomLink location='/page3'>page3</CustomLink></li>
      </ul>
      {router()}
    </div>
   
  )
}

export default App
