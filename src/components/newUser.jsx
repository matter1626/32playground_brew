import React, { useState } from 'react';
import axios from 'axios'

function NewUser() {

    let[user,setUser]=useState([]);

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        user[name] = value;
        setUser(user) 
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user);
        newUser(user);
    }

    const newUser = (e) => {
        console.log('new user function');
        let obj = {
            firstname:e.fname,
            lastname:e.lname,
            username:e.username,
            pword:e.pword
        }
        console.log(obj)
        axios.post('http://localhost:4000/newuser',obj);
    }

    return (<div>
        lets make a new user

        <form
            onSubmit={handleSubmit}>
            <input
                onChange={handleOnChange}
                type='text'
                name='fname'
                placeholder='first name'/>

            <input
                onChange={handleOnChange}
                type='text'
                name='lname'
                placeholder='last name'/>

            <input
                onChange={handleOnChange}
                type='text'
                name='username'
                placeholder='username'/>
                
            <input
                onChange={handleOnChange}
                type='text'
                name='pword'
                placeholder='password'/>

            <input
                type="submit" 
                value="Submit"/>
        
        </form>
    </div>);
}

export default NewUser;