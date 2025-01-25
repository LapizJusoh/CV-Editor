import './App.css'
import { useState } from 'react';
import Input from './Input';

// name, email address

function App() {

  const initialData = {
    personal: {
      userName: "",
      email: "",
      phone: ""
    },
    education: {
      schoolName: "",
      studyTitle: "",
      studyDate: "",
    },
    work: {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      dateStart: "",
      dateEnd: ""
    }
  };

  const [inputDetails, setInputDetails] = useState(initialData);

  const [finalOutput, setFinalOutput] = useState(initialData);

  function onChange(data) {
    setInputDetails(data);
  }

  function submitOutput(e) {
    e.preventDefault();
    setFinalOutput(inputDetails);
  }

  return (
    <div>
      <Input
        inputDetails={inputDetails}
        sendToParent={onChange}
        returnOutput={submitOutput}
      />
      <div id="output">
        <div className="content">
          <h1>{finalOutput.personal.userName}</h1>
          <h1>{finalOutput.personal.email}</h1>
          <h1>{finalOutput.personal.phone}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
