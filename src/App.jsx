import './App.css'
import { useState } from 'react';
import Input from './Input.jsx';
import Output from './Output.jsx';

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
      <Output
        outputDetails={finalOutput}
      />
    </div>
  )
}

export default App
