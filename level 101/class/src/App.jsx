import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='bgCream body'>
      <div className='container'>

        <div className='imageDiv'>
        </div>

        <div className='descDiv bgWhite'>
          <p className='montserrat textGrey tag'>
            PERFUME
          </p>

          <h3 className='fraunces heading'>
            Gabrielle Essence Eau De Parfum
          </h3>
          
          <p className='textGrey montserrat desc'>
            A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className='priceDiv'>
            <h3 className='textGreen-500 fraunces'>
              $149.99
            </h3>
            <p className='montserrat textGrey'>
              $169.99
            </p>
          </div>

          <button className='bgGreen-500 montserrat'>
            <img src="/images/icon-cart.svg" alt="Error" />
            Add to Cart
          </button>
          
        </div>

      </div>
    </div>
  )
}

export default App;
