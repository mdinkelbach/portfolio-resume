import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid Email');
      return;
    }
    if (!userName) {
      setErrorMessage('Please enter a name');
      return;
    }
    if (!message) {
      setErrorMessage(`Please attach a message`);
      return;
    }
    alert(`Your message has been sent!`);

    setUserName('');
    setMessage('');
    setEmail('');
  };
  

  return (
    <div>
        <h1>Contact</h1>
        <p>If you would like to get in touch with me, please send me a message!</p>
        <p>Or if you prefer, you can send an email to mj.dinkelbach@gmail.com.</p>
        <div>
        <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        {Boolean(userName) || (
        <div className="err-msg">
          Please include a name
        </div>
      )}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        {Boolean(email) || (
        <div className="err-msg">
          Please include an email address
        </div>
      )}
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        {Boolean(message) || (
        <div className="err-msg">
          Please include a message
        </div>
      )}
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    </div>
  );
}

export default Contact;