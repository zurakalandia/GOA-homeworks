import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import react from "./assets/react.svg"

createRoot(document.getElementById('root')).render(
  <div>
    <button>Hello 1</button>
    <button>Hello 2</button>
    <button>Hello 3</button>
    <img src={react} alt="error" />
    <h1>Hello!</h1>
    <h2>Hello!!</h2>
    <p>Paragraph</p>
    <a href="">empty link</a>
  </div>
  
)
