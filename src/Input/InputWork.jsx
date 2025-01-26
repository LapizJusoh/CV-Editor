import '../App.css';
import PropTypes from "prop-types";

function InputWork( {inputData, sendToParent} ) {

  return (
    <div>
      <h1 className="title">Work Experience</h1>
      <div className="content">
        <div>
          <div className="input-box">
            <div className="user-details">
              <label className="details" htmlFor="companyName">
                Name of Company:
              </label>
              <input
                type="text"
                id="companyName"
                value={inputData.work.companyName}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    work: {
                      ...inputData.work,
                      companyName: e.target.value,
                    },
                  })
                }
                placeholder="Insert the name of company here"
              />
            </div>
            <div className="user-details">
              <label className="details" htmlFor="positionTitle">
                Previous/Current Position:
              </label>
              <input
                type="text"
                id="positionTitle"
                value={inputData.work.positionTitle}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    work: {
                      ...inputData.work,
                      positionTitle: e.target.value,
                    },
                  })
                }
                placeholder="Insert your work position here"
              />
            </div>
            <div className="user-details">
              <label className="details" htmlFor="responsibilities">
                Responsibilities:
              </label>
              <input
                type="text"
                id="responsibilities"
                value={inputData.work.responsibilities}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    work: {
                      ...inputData.work,
                      responsibilities: e.target.value,
                    },
                  })
                }
                placeholder="Insert your responsibilities here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InputWork.propTypes = {
  inputData: PropTypes.object,
  sendToParent: PropTypes.func,
}

export default InputWork;