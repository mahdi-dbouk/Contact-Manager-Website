import { useEffect } from 'react';
import WebFont from 'webfontloader';
import './App.css';

function App() {

  //webfonts loader
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
  });

  return (
    <div>
      <header className='flex d-row rv-center rh-center'>
        <h1>Contacts App</h1>
      </header>
      <div className="main flex d-row">
        <div className="aside flex d-column">
          
        </div>
        <div className="map-container">

        </div>
      </div>
    </div>
  );
}

export default App;
