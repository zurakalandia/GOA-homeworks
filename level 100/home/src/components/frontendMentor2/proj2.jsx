import './proj2.css';

function Proj2() {
  return (
    <div className='bgCream wrapper'>
      <div className='proj2-container'>

        <div className='proj2-imageDiv'>
        </div>

        <div className='proj2-descDiv bgWhite'>
          <p className='montserrat textGrey proj2-tag'>
            PERFUME
          </p>

          <h3 className='fraunces'>
            Gabrielle Essence Eau De Parfum
          </h3>
          
          <p className='textGrey montserrat proj2-desc'>
            A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL
          </p>
          <div className='proj2-priceDiv'>
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

export default Proj2;