import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import lionImage from './assets/lomi1.jpg'



function App() {
  const [counter, lomi] = useState(0);
  const [increase, setIncrease] = useState(0);

  const handleIncrease = () => {
    lomi(counter + increase);
    console.log('increase', counter + increase);
  }

  const handleDecrease = () => {
    lomi(counter - increase);
    console.log('decrease', counter - increase);
  }

  const handleSpecialPlus = () => {
    setIncrease(increase + 1);
  }

  const handleSpecialMinus = () => {
    if(increase > 0) {
      setIncrease(increase - 1);
    }
  }
  
  return (
    <>
      <div>
        <span>{counter}</span>
        <div>
          <button onClick={handleIncrease}>increase</button>
          <button onClick={handleDecrease}>decrease</button>
          <button onClick={handleSpecialPlus}>+{increase}</button>
          <button onClick={handleSpecialMinus}>-{increase}</button>
        </div>
      </div>


    {/*<img src={lionImage} alt="Lion Image" />*/}
    </>
  )
}

export default App;
