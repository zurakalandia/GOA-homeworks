import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header.jsx'
import Product from './product.jsx'
import ToDoList from './toDoList.jsx'
import Button from './button.jsx'
import Card from './card.jsx'

function App() {
  return (
    <div>
      <Card>
        <Header>Welcome to my App</Header>
        <Product price={2200} inStock={true} />
        <ToDoList todos={['todo1', 'todo2', 'todo3']}/>
        <Button onClick={() => console.log('Hello world')}/>
      </Card>  
    </div>
  )
}

export default App
