import React, { useState } from "react";
import axios from "axios";
import Validation from "./Validation";
import "../styles/Login.css";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();

  const [errors, setErrors] = useState({});

  const onLogin = (e) => {
    e.preventDefault();
    setErrors(Validation({ username, secret }));
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper" onSubmit={onLogin}>
          <div className="name">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              className="input"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="name">
            <label htmlFor="secret" className="label">
              Password
            </label>
            <input
              className="input"
              type="password"
              name="secret"
              onChange={(e) => setSecret(e.target.value)}
            />
            {errors.secret && <p className="error">{errors.secret}</p>}
          </div>
          <div>
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
