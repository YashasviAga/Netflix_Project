import React, { useState, useEffect } from "react";
import './App.css'; 

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getQueryParam = (name) => {
      name = name.replace(/\[]/, '[').replace(/\]]/, ']');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(window.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };    
    setEmail(getQueryParam('email'));
    document.title = "Getting started with Netflix";

  }, []);
  
  const validate = (value) => {
    if (value.length >= 4) {
      setErrorMessage('Is Valid Password');
    } else {
      setErrorMessage('*Password Length Should Be At Least 4 Characters');
    }
  }
  const handleNextButtonClick = () => {
    window.alert("This website is a clone of the original Netflix website, created for project purposes. It currently consists of only this page and does not replicate all the webpages found on the original site.\n\nThank you for visiting our website!");
    const confirmClose = window.confirm("Would you like to close the website?");
      if (confirmClose) {
        window.close();
      }
  }
  return (
    <div>
      <div className="header2">
        <a href="index.html"> <img src="./logo.svg" className="logo2" alt="Netflix Logo" /></a>
      </div>
      <div className="formcontainer">
        <div className="signuphead">
          <h2><span>Welcome back!</span><br />Joining Netflix is easy.</h2><br />
        </div>
        <div className="addpassword">
          <p>Enter your password and you'll be watching in no time.</p><br />
        </div>
        <div className="displaymail">
          <p>Email</p>
          <p className="setEmail" value={email}>{email}</p>
          <br />
        </div>
        <div className="passwordenter">
          <input type="password" id="passwordreq" required value={password} onChange={(e) => {setPassword(e.target.value); validate(e.target.value);}} />
          <label htmlFor="passwordreq">Enter password</label>
        </div>
        {errorMessage === '' ? null :
          <span style={{ color: '#dd1111', fontSize: '13px' }}>
            {errorMessage}
          </span>
        }
        <br />
        <br />
        <div className="loginhelp">
          <a href="https://www.netflix.com/in/LoginHelp" target="_blank" rel="noreferrer" style={{ color: '#0071eb' }}>Forgot your password?</a>
        </div>
        <br />
        <div className="nextbutton">
          <button id="nextbutton" onClick={handleNextButtonClick}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
