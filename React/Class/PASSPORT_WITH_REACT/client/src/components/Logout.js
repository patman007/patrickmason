import React, {useEffect} from 'react'
import axios from 'axios'

export default function Logout(props){

    useEffect(()=>{
        axios.get('/logout')
        .then(()=>{
            props.history.push('/login')
        })
        .catch(err => console.log(err))
    })

    return(
        <>
            <h1>You have logged out</h1>

            <form action="/login" method="post">
                <input type="text" name="username" placeholder="username"/>
                <input type="password" name="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </>
    )
}