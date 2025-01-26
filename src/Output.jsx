import './App.css';
import PropTypes from "prop-types";

function Output({ outputDetails }) {
  return (
    <div id="output">
      <h1>Testing</h1>
      <div>
        <h1>{outputDetails.personal.userName}</h1>
        <h1>{outputDetails.personal.email}</h1>
        <h1>{outputDetails.personal.phone}</h1>
      </div>
      <div>
        <h1>{outputDetails.education.schoolName}</h1>
        <h1>{outputDetails.education.studyTitle}</h1>
        <h1>{outputDetails.education.studyDate}</h1>
      </div>
      <div>
        <h1>{outputDetails.work.companyName}</h1>
        <h1>{outputDetails.work.positionTitle}</h1>
        <h1>{outputDetails.work.responsibilities}</h1>
        <h1>{outputDetails.work.dateStart}</h1>
        <h1>{outputDetails.work.dateEnd}</h1>
      </div>
    </div>
  )
}

Output.propTypes = {
  outputDetails: PropTypes.object.isRequired,
}

export default Output;