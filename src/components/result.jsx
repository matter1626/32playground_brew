import React, { useEffect, useState } from 'react';
import axios from 'axios'
axios.defaults.withCredentials = true

function Result() {

    let [logs,setLogs] = useState([
    ]);

    useEffect(() => {
        console.log('getting results')
        getResults()
    },[])

    const getResults = () => {
        let obj = {
            msg:'this is test'
        }
        axios.post('http://localhost:4000/results',obj)
        .then(res => {
            console.log(res.data);
            setLogs(res.data)
          })
    }

    return (
        <div>

        <div className='container'>
        <br></br>
        {logs.map((d) => (
            <div 
                key={d._id}
                className='results'>
              
              <span
              className='spanny'
              >right:{d.right}</span>  
              
              <span> </span>
              
              <span
              className='spanny'
              >wrong:{d.wrong}</span>
              
              <h3
              style={{color:'ButtonHighlight'}}
              >D: {d.date} T: {d.time}</h3>

            </div>
        ))}
        
    </div>
    </div>
    );
}

export default Result;