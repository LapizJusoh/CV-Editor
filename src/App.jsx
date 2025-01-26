import './App.css'
import { useState } from 'react';
import initialData from './InitialData.jsx';
import Input from './Input.jsx';
import Output from './Output.jsx';

// name, email address

function App() {

  const [finalOutput, setFinalOutput] = useState(initialData);

  function submitOutput(e, inputDetails) {
    e.preventDefault();
    setFinalOutput(inputDetails);
  }

  return (
    <div>
      <Input
        returnOutput={submitOutput}
      />
      <Output
        outputDetails={finalOutput}
      />
    </div>
  )
}

export default App
