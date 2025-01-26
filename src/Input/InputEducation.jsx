import '../App.css';
import PropTypes from "prop-types";

function InputEducation( {inputData, sendToParent} ) {

  return (
    <div>
      <h1 className="title">Educational Qualification</h1>
      <div className="content">
        <div>
          <div className="input-box">
            <div className="user-details">
              <label className="details" htmlFor="schoolName">
                Name of Academic Institution:
              </label>
              <input
                type="text"
                id="schoolName"
                value={inputData.education.schoolName}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    education: {
                      ...inputData.education,
                      schoolName: e.target.value,
                    },
                  })
                }
                placeholder="Insert your university here"
              />
            </div>
            <div className="user-details">
              <label className="details" htmlFor="studyTitle">
                Highest Certificate:
              </label>
              <input
                type="text"
                id="studyTitle"
                value={inputData.education.studyTitle}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    education: {
                      ...inputData.education,
                      studyTitle: e.target.value,
                    },
                  })
                }
                placeholder="Insert your Diploma/Bachelor/Masters/etc. here"
              />
            </div>
            <div className="user-details">
              <label className="details" htmlFor="studyDate">
                Data of Study:
              </label>
              <input
                type="text"
                id="studyDate"
                value={inputData.education.studyDate}
                onChange={(e) =>
                  sendToParent({
                    ...inputData,
                    education: {
                      ...inputData.education,
                      studyDate: e.target.value,
                    },
                  })
                }
                placeholder="Insert your study date here"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InputEducation.propTypes = {
  inputData: PropTypes.object,
  sendToParent: PropTypes.func,
}

export default InputEducation;