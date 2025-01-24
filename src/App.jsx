import './App.css'
import { useState } from 'react';

// name, email address, 

function submitPersonalDetails(event, userName, phone, email) {
  event.preventDefault();
  console.log(userName);


};

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  return (
    <div>
      <div id="input">
        <div className="container">
          <h1 id='title'>Personal Details</h1>
          <div className="content">
            <form>
              <div className="input-box">
                <div className="user-details">
                  <label className="details" htmlFor="userName" >Name:</label>
                  <input
                    type="text" 
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Insert your name here" 
                  />
                </div>
                <div className="user-details">
                  <label className="details" htmlFor="userEmail">Email:</label>
                  <input 
                    type="mail" 
                    id="userEmail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Insert your email here" 
                  />
                </div>
                <div className="user-details">
                  <label className="details" htmlFor="userPhone">Phone Number:</label>
                  <input 
                    type="text" 
                    id="userPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Insert your email here" 
                  />
                </div>
              </div>
              <input
                type="submit"
                id="personal-detail-submit"
                value="Submit"
                onClick={(e) => submitPersonalDetails(e, userName, email, phone)}/>
              
            </form>
          </div>
        </div>

      </div>
      <div id="output">

      </div>
    </div>
  )
}

export default App
