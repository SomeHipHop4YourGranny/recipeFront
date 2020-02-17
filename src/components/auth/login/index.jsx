import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './login.scss';

function Login(props) {
  const { send } = props;

  const [login = '', setLogin] = useState();
  const [password = '', setPassword] = useState();

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };
  const handlePwd = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { login, password };
    send({ type: 'LOGIN', data });
  };

  return (
    <div className="authWrapper">
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="login">
          Login:
          <input
            type="text"
            placeholder="Login"
            id="login"
            onInput={handleLogin}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="password"
            id="password"
            onInput={handlePwd}
          />
        </label>
        <label htmlFor="Submit">
          <input type="submit" value="Submit" id="Submit" />
        </label>
      </form>
    </div>
  );
}

Login.propTypes = {
  send: PropTypes.func.isRequired,
};

export default Login;
