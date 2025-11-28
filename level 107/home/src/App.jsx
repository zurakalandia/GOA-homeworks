import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if(count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className='wrapper'>
      <div className="left">
        <div className="sidePreview">
          <img className='sideImg' src="/image1.png" alt="" />
          <img className='sideImg' src="/image2.png" alt="" />
          <img className='sideImg' src="/image3.png" alt="" />
        </div>
        <div className='imagePreview'>
          <img className='previewImg' src="/image1.png" alt="" />
        </div>
        
      </div>
      <div className="right">
        <h2>ONE LIFE GRAPHIC T-SHIRT</h2>
        <div className='rating'>
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
          <img src="/star.png" alt="" />
          <img src="/rating.png" alt="" />
          4.5/5
        </div>
        <div className="price">
          <span className='currPrice'>260$</span>
          <span className='oldPrice'>300$</span>
          <div className="discount">-40%</div>
        </div>
        <p className='info'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        <div className="colorsDiv">
          <p>Select Colors</p>
          <div>
            <div className='colorCircle color1'></div>
            <div className='colorCircle color2'></div>
            <div className='colorCircle color3'></div>
          </div>
        </div>

        <div className='sizesDiv'>
          <p>Choose Size</p>
          <div className='buttonsDiv'>
            <button>Small</button>
            <button>Medium</button>
            <button>Large</button>
            <button>X-Large</button>
          </div>
          
        </div>
        <div className='finalDiv'>
          <div className='countDiv'>
            <img onClick={decrement} src="/minus-sign.png" alt="" />
            {count}
            <img onClick={increment} src="/plus.png" alt="" />
          </div>
          <button>Add to Cart</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
