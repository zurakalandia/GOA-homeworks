import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let timerStarted = false

function App() {
  const [time, setTime] = useState(new Date)
  const [indicator, setIndicator] = useState('time');
  const [color, setColor] = useState('black')

  if (!timerStarted) {
    setInterval(() => {
      setTime(new Date())
    }, 1000)
    timerStarted = true
  }

  return (
    <div>
      <header><h2>amazon</h2></header>
      <section>
        <div className="container">
          <div className='clock' style={{backgroundColor: color}}>
            {indicator === 'time' ? time.toLocaleTimeString('en-GB') : '89 BPM'}
          </div>
          <div className='rightDiv'>
            <h3>FitBit 19 - The Smartest Watch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   Id inventore autem, atque nisi vitae quae officiis ullam  aspernatur consectetur officia quisquam sit, debitis   quibusdam est!</p>
            <h4>Select Color</h4>
            <div className="colors">
              <div onClick={() => setColor('black')} className="black"></div>
              <div onClick={() => setColor('#ab5039')} className="red"></div>
              <div onClick={() => setColor('#56567a')} className="blue"></div>
              <div onClick={() => setColor('#7a5861')} className="purple"></div>
            </div>

            <h4>Features</h4>
            <div className='buttons'>
                <button onClick={() => setIndicator('time')}>Time</button>
                <button onClick={() => setIndicator('heartRate')}>Heart Rate</button>
            </div>

              <button className='buyButton'>BUY NOW</button>
        </div>
        </div>
        
      </section>
    </div>
  )
}

export default App
