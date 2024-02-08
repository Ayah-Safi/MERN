import React, { useState } from 'react';

function HookForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateFirstName = (value) => {
    setFirstName(value);
    setFirstNameError(value.length < 2 && value !== '' ? 'First Name must be at least 2 characters' : '');
  };

  const validateLastName = (value) => {
    setLastName(value);
    setLastNameError(value.length < 2 && value !== '' ? 'Last Name must be at least 2 characters' : '');
  };

  const validateEmail = (value) => {
    setEmail(value);
    setEmailError(value.length < 5 && value !== '' ? 'Email must be at least 5 characters' : '');
  };

  const validatePassword = (value) => {
    setPassword(value);
    setPasswordError(value !== confirmPassword ? 'Passwords must match and be at least 8 characters' : '');
  };

  const validateConfirmPassword = (value) => {
    setConfirmPassword(value);
    setPasswordError(password !== value ? 'Passwords must match and be at least 8 characters' : '');
  };

  return (
    <div>
       <style>
        {`
          .error {
            color: red;
            margin-top: 0.5em;
          }
          input {
            display: block;
            width: 100%;
            margin-bottom: 0.5em;
            padding: 8px;
          }
          form div {
            margin-bottom: 1em;
          }
        `}
      </style>
      <form>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => validateFirstName(e.target.value)}
          />
          {firstNameError && <p className="error">{firstNameError}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => validateLastName(e.target.value)}
          />
          {lastNameError && <p className="error">{lastNameError}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => validatePassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => validateConfirmPassword(e.target.value)}
          />
          {password !== confirmPassword && password.length >= 8 && <p className="error">Passwords must match</p>}
        </div>
      </form>
      <div>
        <h2>Your Form Data</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
}

export default HookForm;
