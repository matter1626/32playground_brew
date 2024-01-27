import './App.css';
import Generator from './components/questionGenerator';
import Login from './components/login';
import NewUser from './components/newUser';
import {BrowserRouter as Router, Route, Routes, NavLink, useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Result from './components/result';
import Protect from './components/protect';
import { useState } from 'react';

import axios from 'axios'

const cookie = new Cookies()

function App() {

  // const createCookie = () => {
  //   cookie.set('name','yaga',{sameSite:'strict',path:'/test',expires:new Date(new Date().getTime()+30*1000), httpOnly:true})
  // }

  let [auth, setAuth] = useState(null);
  let [loggedOut,setLoggedOut] = useState(true)

  const login = (obj) => {
    console.log(obj);
    axios.post('http://localhost:4000/login',obj).then((res) => {
        console.log(res.data)}
    )
    setAuth(true);
    setLoggedOut(false);
  }

  return (
    <div className="App">

        <NavLink
          className='navvy' 
          to='/test'> test </NavLink>
        
        <NavLink
          className='navvy'
          to='/results'> result </NavLink>

      {loggedOut ? <Login logg={login}/>
          :
          <button
          className='logoutbtn'
          onClick={() => {
              setAuth(false);
              setLoggedOut(true)
              }}
          >log-out</button>}

      <Routes>
      
      <Route element={<Protect pro={auth}/>}>

        <Route  path='results'
                element={<Result/>}/>

        <Route  path='test'
                element={<Generator/>}/>

      </Route>

      </Routes>

    </div>
  );
}

export default App;
