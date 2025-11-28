import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="column1 bg-Gold-500">
          <img src="/images/icon-sedans.svg" alt="" />
          <h2 className='bigShoulders Gray-100'>SEDANS</h2>
          <p className='transWhite'>
            Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
          </p>
          <button className='bg-Gray-100 Gold-500'>
            Learn More
          </button>
        </div>

        <div className="column2 bg-Cyan-800">
          <img src="/images/icon-suvs.svg" alt="" />
          <h2 className='bigShoulders Gray-100'>SUVS</h2>
          <p className='transWhite'>
            Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
          </p>
          <button className='bg-Gray-100 Cyan-800'>
            Learn More
          </button>
        </div>

        <div className="column3 bg-Green-950">
          <img src="/images/icon-luxury.svg" alt="" />
          <h2 className='bigShoulders Gray-100'>LUXURY</h2>
          <p className='transWhite'>
            Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className='bg-Gray-100 Green-950'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
