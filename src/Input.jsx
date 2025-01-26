import { useState } from 'react';
import PropTypes from "prop-types";
import initialData from "./InitialData.jsx";
import InputPersonal from './Input/InputPersonal.jsx';
import InputEducation from "./Input/InputEducation.jsx";
import InputWork from "./Input/InputWork.jsx";

function Input( {returnOutput} ) {
  const [inputDetails, setInputDetails] = useState(initialData);

  function onChange(data) {
    setInputDetails(data);
  }

  return (
    <div id="input">
      <form className="container">
        <InputPersonal inputData={inputDetails} sendToParent={onChange} />
        <InputEducation inputData={inputDetails} sendToParent={onChange} />
        <InputWork inputData={inputDetails} sendToParent={onChange} />

        <input
          type="submit"
          id="form-submit-btn"
          value="Submit"
          onClick={(e) => returnOutput(e, inputDetails)}
        />
      </form>
    </div>
  );
};

Input.propTypes = {
  returnOutput: PropTypes.func,
}

export default Input;