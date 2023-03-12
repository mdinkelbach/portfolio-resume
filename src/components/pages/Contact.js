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

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid or missing');
      return;
    }
    if (!message) {
      setErrorMessage(
        `Please attach a message`
      );
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
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
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