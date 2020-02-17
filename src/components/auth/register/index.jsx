import React from 'react';
import './register.scss';

function Register() {
  return (
    <div className="authWrapper">
      <form method="post">
        <label htmlFor="login">
          Login:
          <input type="text" placeholder="Login" id="login" />
        </label>
        <label htmlFor="email">
          email:
          <input type="email" placeholder="Email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" placeholder="password" id="password" />
        </label>
        <label htmlFor="passwordConfirm">
          Password confirmation
          <input
            type="password"
            placeholder="password confirmation"
            id="passwordConfirm"
          />
        </label>
        <label htmlFor="Submit">
          <input type="submit" value="Submit" id="Submit" />
        </label>
      </form>
    </div>
  );
}

export default Register;
