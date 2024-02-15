import React, { useCallback, useState } from 'react';
// import navi from './navi.js';
import navi from './navi.js';

import {BrowserRouter as Router, Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import axios from 'axios'
import { useBeforeUnload } from 'react-router-dom';
axios.defaults.withCredentials = true

function AuthWrapper() {

    let [user, setUser] = useState({name: "", isAuthenticated: false})
    let [loggedIn, setLoggedIn] = useState(false)

    let[username,setUsername]=useState([
    ])

    let[password,setPassword]=useState([
    ])

    const login = (obj) => {
        console.log(obj);
        axios.post('http://localhost:4000/login',obj).then((res) => {
            if(res.data === 'cookie initialized'){
              console.log('yay!')
              setLoggedIn(!loggedIn)
              setUser({name:'Jac',
              isAuthenticated: true
            })
            }
          }
        )
      }
    

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
        login(obj)
    }

    console.log(loggedIn);

    console.log(navi);

    return (
    <div>

        <h2>auth route</h2>

    {user.isAuthenticated === true ? <button
          className='logoutbtn'
          onClick={() => {
              setUser({name:'',
              isAuthenticated:false
            });
              setLoggedIn(false);
              }}
          >log-out</button>:<div></div>}

        {navi.map((v,i) => {
          if(v.isPrivate === true && user.isAuthenticated === true)
          return <NavLink 
            className={'navvy'}
            to={v.path}
            >{v.name}</NavLink>
        })}

        {navi.map((v,i) => {
          if(v.isPrivate === !true)
          return <NavLink
            className={'navvy'}
            to={v.path}
            >{v.name}</NavLink>
        })}


        {loggedIn ?  <div>welcome to the game</div>:<form
            onSubmit={onsubmit}
            >
                <div>you need to log in</div>

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
        </form>}

        <Routes>
                {navi.map((v,i) => {

                  if(v.isPrivate === false){
                    console.log(v.name);
                    return <Route key={i} path={v.path} element={v.element}/>}

                  if(v.isPrivate === true && user.isAuthenticated === true ){
                    console.log(v.name);
                    return <Route key={i} path={v.path} element={v.element}/>}
            })}
        </Routes>

    </div>);
}

export default AuthWrapper;