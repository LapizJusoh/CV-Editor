//import submitPersonalDetails from "./SubmitPersonalDetails";

export default function Input( {personalDetails, sendToParent, updateOutput} ) {

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
                  value={personalDetails.userName}
                  onChange={(e) =>
                    sendToParent({
                      ...personalDetails,
                      userName: e.target.value,
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
                  value={personalDetails.email}
                  onChange={(e) =>
                    sendToParent({
                      ...personalDetails,
                      email: e.target.value,
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
                  value={personalDetails.phone}
                  onChange={(e) =>
                    sendToParent({
                      ...personalDetails,
                      phone: e.target.value,
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
              onClick={(e) => updateOutput(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
