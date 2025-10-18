import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='wrapper'>


        {/* THE HEADER */}


        <div className="header">
          <img src="/images/logo.svg" alt="Error" />
          <div className='neutral800 hoverNeutral700' tabIndex={0}>
            <img src="/images/icon-units.svg" alt="Error" />
            <p>Units</p>
            <img src="/images/icon-dropdown.svg" alt="Error" />
          </div>
        </div>

        {/* THE TITLE (SEARCH BAR) */}

        <div className="titleDiv">


          <h2 className="heading bricolageGrotesque">How's the sky looking today?</h2>


          <div className='searchDiv'>

            <div className='searchBar neutral800 hoverNeutral700' tabIndex={0}>
              <img src="/images/icon-search.svg" alt="Error" />
              <p className='textNeutral300'>Search for a place...</p>
            </div>

            <div className='searchButton bgBlue500 hoverBgBlue700' tabIndex={0}>
              <p>Search</p>
            </div>

          </div>
        </div>

        {/* THE CONTAINER */}

        <div className="container">


          {/* THE LEFT SIDE OF THE CONTAINER */}


          <div className="leftContainer">
            
            <div className="grid">


              <div className='upperGrid'>

                <div className='leftGrid'>
                  <h5>Berlin, Germany</h5>
                  <p className='textNeutral300'>Tuesday, Aug 5, 2025</p>
                </div>

                <div className="rightGrid">
                  <img src="/images/icon-sunny.webp" alt="Error" />
                  <h3>20°</h3>
                </div>


              </div>


              <div className='smallGrid neutral800'><p className='textNeutral300'>Feels Like</p> <h5>18°</h5></div>
              <div className='smallGrid neutral800'><p className='textNeutral300'>Humidity</p> <h5>46%</h5></div>
              <div className='smallGrid neutral800'><p className='textNeutral300'>Wind</p> <h5>14 km/h</h5></div>
              <div className='smallGrid neutral800'><p className='textNeutral300'>Precipitation</p> <h5>0 mm</h5></div>

            </div>


            {/* ------------------------------------------ */}

            <div className="forecastDiv">

              <h5>Daily forecast</h5>

              <div className="forecastGrid">


                <div className='weekDay neutral800'>
                  <p>Tue</p>
                  <img src="/images/icon-rain.webp" alt="Error" />
                  <div>
                    <p>20°</p>
                    <p className='textNeutral200'>14°</p>
                  </div>
                </div>

                <div className='weekDay neutral800'>
                  <p>Wed</p>
                  <img src="/images/icon-drizzle.webp" alt="" />
                  <div>
                    <p>21°</p>
                    <p className='textNeutral200'>15°</p>
                  </div>
                </div>

                <div className='weekDay neutral800'>
                  <p>Thu</p>
                  <img src="/images/icon-sunny.webp" alt="" />
                  <div>
                    <p>24°</p>
                    <p className='textNeutral200'>14°</p>
                  </div>
                </div>

                <div className='weekDay neutral800'>
                  <p>Fri</p>
                  <img src="/images/icon-partly-cloudy.webp" alt="" />
                  <div>
                    <p>25°</p>
                    <p className='textNeutral200'>13°</p>
                  </div>
                </div>

                <div className='weekDay neutral800'>
                  <p>Sat</p>
                  <img src="/images/icon-storm.webp" alt="" />
                  <div>
                    <p>21°</p>
                    <p className='textNeutral200'>15°</p>
                  </div>
                </div>

                <div className='weekDay neutral800'>
                  <p>Sun</p>
                  <img src="/images/icon-snow.webp" alt="" />
                  <div>
                    <p>25°</p>
                    <p className='textNeutral200'>16°</p>
                  </div>
                </div>
 
                <div className='weekDay neutral800'>
                  <p>Mon</p>
                  <img src="/images/icon-fog.webp" alt="" />
                  <div>
                    <p>24°</p>
                    <p className='textNeutral200'>15°</p>
                  </div>
                </div>


              </div>
            </div>
          </div>


          {/* THE RIGHT SIDE OF THE CONTAINER */}


          <div className="rightContainer neutral800">


            <div className="rightContainerHead">
              <h5>Hourly forecast</h5>
              <div className='neutral600'><p>Tuesday</p> <img src="/images/icon-dropdown.svg" alt="Error" /></div>
            </div>


            <div className="rightContainerMain">

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-overcast.webp" alt="" />
                  <p>3 PM</p>
                </div>
                <p>20°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-partly-cloudy.webp" alt="" />
                  <p>4 PM</p>
                </div>
                <p>20°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-sunny.webp" alt="" />
                  <p>5 PM</p>
                </div>
                <p>20°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-overcast.webp" alt="" />
                  <p>6 PM</p>
                </div>
                <p>19°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-snow.webp" alt="" />
                  <p>7 PM</p>
                </div>
                <p>18°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-fog.webp" alt="" />
                  <p>8 PM</p>
                </div>
                <p>18°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-drizzle.webp" alt="" />
                  <p>9 PM</p>
                </div>
                <p>17°</p>
              </div>

              <div className='rightMainSub neutral700'>
                <div>
                  <img src="/images/icon-overcast.webp" alt="" />
                  <p>10 PM</p>
                </div>
                <p>17°</p>
              </div>          
            </div>
          </div>
        </div>


    </div>
  )
}

export default App
