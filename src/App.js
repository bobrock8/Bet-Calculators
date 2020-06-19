import React from 'react';
import NumberInput from './components-library/basic-components/NumberInput';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NumberInput class="acaclass" name="acaname" placeholder="acaplace" min="10" max="20"/>
    </div>
  );
}

export default App;
