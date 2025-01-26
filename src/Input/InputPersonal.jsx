import '../App.css';
import PropTypes from "prop-types";

function InputPersonal( {inputData, sendToParent} ) {

  return (
    <div>
      <h1 className="title">Personal Details</h1>
      <div className="content">
        <div>
          <div className="input-box">
            <div className="user-details">
              <label className="details" htmlFor="userName">
                Name:
              </label>
              <input
                type="text"
                id="userName"
                value={inputData.personal.userName}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    personal: {
                      ...inputData.personal,
                      userName: e.target.value,
                    },
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
                value={inputData.personal.email}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    personal: {
                      ...inputData.personal,
                      email: e.target.value,
                    },
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
                value={inputData.personal.phone}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    personal: {
                      ...inputData.personal,
                      phone: e.target.value,
                    },
                  })
                }
                placeholder="Insert your email here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InputPersonal.propTypes = {
  inputData: PropTypes.object,
  sendToParent: PropTypes.func,
}

export default InputPersonal;