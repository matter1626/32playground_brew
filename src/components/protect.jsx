import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

function Protect(props) {

  let auth = props.pro;

  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  );
}

export default Protect;
