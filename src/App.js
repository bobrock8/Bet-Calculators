import React from 'react';
import NumberInput from './components-library/basic-components/NumberInput';
import CheckboxInput from './components-library/basic-components/CheckboxInput';
import Label from "./components-library/basic-components/Label";
import Tooltip from "./components-library/basic-components/Tooltip";
import RangeInput from "./components-library/basic-components/RangeInput";

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

        <hr />
        <h2>Tooltip</h2>
        <Tooltip customClass="goran-custom-class" tooltipText="This is a tooltip text." >
            <span>Hover over this text.</span>
        </Tooltip>

        <hr />
        <h2>Range Input</h2>
        <RangeInput class="goran-class" name="goran-range-name" min="1" max="40" />
        <hr />
        <h2>Select Input</h2>
    </div>
  );
}

export default App;
