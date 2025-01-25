import './App.css'
import { useState } from 'react';
import Input from './Input';

// name, email address

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const [finalOutput, setFinalOutput] = useState( {
    userName: "",
    email: "",
    phone: "",
  });

  function handleClick(data) {
    setPersonalDetails(data);
  }

  function updateOutput(e) {
    e.preventDefault();
    setFinalOutput(personalDetails);
  }

  return (
    <div>
      <Input personalDetails={personalDetails} sendToParent={handleClick} updateOutput={updateOutput}/>
      <div id="output">
        <div className="content">
          <h1>{finalOutput.userName}</h1>
          <h1>{finalOutput.email}</h1>
          <h1>{finalOutput.phone}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
