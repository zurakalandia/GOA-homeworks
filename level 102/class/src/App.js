
import './App.css';

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <div className='leftDiv'>
          <div className='tag'>
            <p>
              Hot Recipes
            </p>
          </div>
          <h2>Spicy delicious chicken wings</h2>
          <p className='desc'>random text</p>
          <div className='info'>
            <div className='time'>30 Minutes</div>
            <div className='chicken'>Chicken</div>
          </div>
          <div className='bottom'>
            <div className='author'>
              <p>John Smith</p>
              <p>15 March 2022</p>
            </div>
            <button>View Recipes</button>
          </div>
        </div>
        <div className='rightDiv'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
