import React, { useState } from "react";
import axios from "axios";
import Validation from "./Validation";
import "../styles/Login.css";

const Register = (props) => {
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const [errors, setErrors] = useState({});

  const onSignup = (e) => {
    e.preventDefault();
    setErrors(Validation({ username, secret, email, first_name, last_name }));
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .then((r) => console.log({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Signup</h2>
        </div>
        <form className="form-wrapper" onSubmit={onSignup}>
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
          <div className="name">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              className="input"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="name">
            <label htmlFor="first_name" className="label">
              First Name
            </label>
            <input
              className="input"
              type="text"
              name="first_name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.first_name && <p className="error">{errors.first_name}</p>}
          </div>
          <div className="name">
            <label htmlFor="last_name" className="label">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              name="last_name"
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.last_name && <p className="error">{errors.last_name}</p>}
          </div>
          <div>
            <button className="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
