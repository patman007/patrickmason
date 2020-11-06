import React, {useEffect, useState} from "react";
import {Redirect} from 'react-router-dom';

import axios from 'axios'

export default function Newsfeed(props){

  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=>{
    axios.get('/newsfeed')
      .then(response => {
        setIsAuth(response.data.isAuth)
        console.log('isAuth: ', isAuth)
      })
  }, [])

  return (
    <>
      {isAuth ? <h1>Welcome to the Newsfeed</h1> : <h1>Please Log in</h1>}
    </>
  );
};
