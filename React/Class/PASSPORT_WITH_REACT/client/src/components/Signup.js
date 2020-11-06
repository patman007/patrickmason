import React, {useState} from "react";
import {Redirect} from 'react-router-dom';

import axios from "axios";

export default function Signup(props) {
  const initialState = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/signup",formData)
      .then((response) => {
          console.log('Signup res: ', response.data.isAuth)
          props.history.push(response.data.isAuth ? '/newsfeed' : '/signup')
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event)=>{
    setFormData({
        ...formData, // spread operator in order to maintain previous data
        [event.target.name] : event.target.value
    })
  }

  return (
    <>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange}/>
        <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange}/>
        <button type='submit' className="btn btn-success">Submit</button>
      </form>
    </>
  );
}
