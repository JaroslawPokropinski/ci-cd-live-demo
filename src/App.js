import React from 'react';
import './App.css';

function App() {
  const howIsCi = 'TEST'; // TODO: change this line
  return (
    <div className="App">
      <header className="App-header">
        <p>
          CI / CD is <span className='how-is-ci'>{howIsCi}</span>!
        </p>
      </header>
    </div>
  );
}

export default App;
