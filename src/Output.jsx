import PropTypes from "prop-types";

function Output({ outputDetails }) {
  return (
    <div id="output">
      <div className="content">
        <h1>{outputDetails.personal.userName}</h1>
        <h1>{outputDetails.personal.email}</h1>
        <h1>{outputDetails.personal.phone}</h1>
      </div>
    </div>
  )
}

Output.propTypes = {
  outputDetails: PropTypes.object.isRequired,
}

export default Output;