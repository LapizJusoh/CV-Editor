//import submitPersonalDetails from "./SubmitPersonalDetails";

export default function Input( {inputDetails, sendToParent, returnOutput} ) {

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
                    sendToParent({
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
                    sendToParent({
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
                    sendToParent({
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
              onClick={(e) => returnOutput(e)}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
