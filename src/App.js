import React from 'react';
import NumberInput from './components-library/basic-components/NumberInput';
import CheckboxInput from './components-library/basic-components/CheckboxInput';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h2>Number Input</h2>
        <NumberInput class="acaclass" name="acaname" placeholder="acaplace" min="10" max="20"/>
        <hr />
        <h2>Checkbox Input</h2>
        <CheckboxInput class="goran-class" name="goran-name" />
    </div>
  );
}

export default App;
