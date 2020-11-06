import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login(props) {
  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    axios
      .get("/login")
      .then((response) => {
        console.log("Login res: ", response);
        setIsAuth(response.data.isAuth);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/login", formData)
      .then((response) => {
        console.log("Signup res: ", response.data.isAuth);
        props.history.push(response.data.isAuth ? "/newsfeed" : "/signup");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData, // spread operator in order to maintain previous data
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Log in page!!</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="btn btn-success">Login</button>
      </form>
    </>
  );
}
