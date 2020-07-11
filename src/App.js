import React from 'react';
import NumberInput from './components-library/basic-components/NumberInput';
import CheckboxInput from './components-library/basic-components/CheckboxInput';
import Label from "./components-library/basic-components/Label";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h2>Number Input</h2>
        <NumberInput class="acaclass" name="acaname" placeholder="acaplace" min="10" max="20"/>
        <hr />
        <h2>Checkbox Input and Label</h2>
        <Label class="label-class" forInput="goran-name" text="Label Example" />
        <CheckboxInput class="goran-class" name="goran-name" />
    </div>
  );
}

export default App;
