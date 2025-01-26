import { useState } from 'react';
import PropTypes from "prop-types";
import initialData from "./InitialData.jsx";

function Input( {returnOutput} ) {

  const [inputDetails, setInputDetails] = useState(initialData);

  function onChange(data) {
    setInputDetails(data);
  }

  return (
    <div id="input">
      <div className="container">

        <h1 id="title">Personal Details</h1>
        <div className="content">
          <form>
            <div className="input-box">
              <div className="user-details">
                <label className="details" htmlFor="userName">
                  Name:
                </label>
                <input
                  type="text"
                  id="userName"
                  value={inputDetails.personal.userName}
                  onChange={(e) =>
                    onChange({
                      ...inputDetails,
                      personal: {
                        ...inputDetails.personal,
                        userName: e.target.value,
                      }
                    })
                  }
                  placeholder="Insert your name here"
                />
              </div>
              <div className="user-details">
                <label className="details" htmlFor="userEmail">
                  Email:
                </label>
                <input
                  type="mail"
                  id="userEmail"
                  value={inputDetails.personal.email}
                  onChange={(e) =>
                    onChange({
                      ...inputDetails,
                      personal: {
                        ...inputDetails.personal,
                        email: e.target.value,
                      }
                    })
                  }
                  placeholder="Insert your email here"
                />
              </div>
              <div className="user-details">
                <label className="details" htmlFor="userPhone">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="userPhone"
                  value={inputDetails.personal.phone}
                  onChange={(e) =>
                    onChange({
                      ...inputDetails,
                      personal: {
                        ...inputDetails.personal,
                        phone: e.target.value,
                      }
                    })
                  }
                  placeholder="Insert your email here"
                />
              </div>
            </div>
            <input
              type="submit"
              id="personal-detail-submit"
              value="Submit"
              onClick={(e) => returnOutput(e, inputDetails)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  sendToParent: PropTypes.func,
  returnOutput: PropTypes.func,
}

export default Input;