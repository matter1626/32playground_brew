import React, { useCallback, useState } from 'react';
import axios from 'axios'
import { useBeforeUnload } from 'react-router-dom';
axios.defaults.withCredentials = true



function Login(props) {
    let[username,setUsername]=useState([
    ])

    let[password,setPassword]=useState([
    ])

    // const login = () => {
    //     let obj = {
    //         username,
    //         password
    //     }
    //     console.log(obj);
    //     axios.post('http://localhost:4000/login',obj).then((res) => {
    //         console.log(res.data)
    //     })
    // }

    
    useBeforeUnload(
        useCallback(() => {
          console.log("logging this before navigate!");
        }, [])
      );

    let handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    onsubmit = (e) => {
        e.preventDefault()
                let obj = {
            username,
            password
        }
        props.logg(obj)
    }

    return (
    <div>
        
        <form
            onSubmit={onsubmit}
            >
            <input
                onChange={handleUsername}
                type='text'
                name='user' 
                placeholder=' ...username'/>
                <br></br>

            <input
                onChange={handlePassword}
                type='password' 
                placeholder=' ...password'/>
            <br></br>

            <input
                className='inp'
                type="submit" 
                value="Submit"/>
        
        </form>
    </div>);
}

export default Login;