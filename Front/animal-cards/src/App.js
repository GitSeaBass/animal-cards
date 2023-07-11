import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Storepage from './components/Storepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Main/>} />
          <Route path='/store' element={<Storepage/>}/>
        </Routes>
      </div>
    </Router>





/*
    <div className="App">
      <header className="App-header">
        <div className='main'>
          <Header />

          <div className='packs'>
            
            <div className='pack'>
              <img src='https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/16:9/w_3599,h_2024,c_limit/Safari-GettyImages-143917249.jpg' alt='pack'/>
              <button>Buy</button>
            </div>
            <div className='pack'>
              <img src='https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/16:9/w_3599,h_2024,c_limit/Safari-GettyImages-143917249.jpg' alt='pack'/>
              <button>Buy</button>
            </div>
            <div className='pack'>
              <img src='https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/16:9/w_3599,h_2024,c_limit/Safari-GettyImages-143917249.jpg' alt='pack'/>
              <button>Buy</button>
            </div>
          </div>


        </div>
      </header>
    </div>*/
  );
}

export default App;
