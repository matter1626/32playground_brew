import React, {useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true

function Check(props) {

    let actualAnswer = props.anny;

    let[count,setCount] = useState({
        right:0,
        wrong:0
    })
   
      useEffect(() => {

        console.log('just setting things up')
        
        return () => {
            console.log('running the cleanup');
            submitLog()
        }
      },[])

      let ddmmyy = new Date();

      let dd = ddmmyy.getDate()
      let mm = ddmmyy.getMonth()+1
      let yy = ddmmyy.getFullYear()
      let hh = ddmmyy.getHours()
      let ms = ddmmyy.getMinutes().toString().padStart(2,"0")

      let date = dd+'/'+mm+'/'+yy;
      date = date.toString();

      let time = hh+':'+ms;
      time = time.toString();

      console.log(date);
      console.log(time);

    const submitLog = () => {
        console.log('lets submit a log')
        if(count.right === 0 && count.wrong === 0){
            console.log('you havent done anything')
            return
        }
        let obj = {
            right:count.right,
            wrong:count.wrong,
            time,
            date
        }
        console.log(obj);
        axios.post('http://localhost:4000/records',obj)
    }

    let checkAns = () => {
        console.log(actualAnswer)
        console.log(Number(userAns))
        if(actualAnswer == userAns){
            console.log('success')
            props.qanny();
            count.right = count.right +1
            setCount(count)
        }else{
            console.log('try again')
            props.qanny();
            count.wrong = count.wrong +1
            setCount(count);
        }
    }

    let[userAns,setUserAns] = useState([])
    
    onchange = (e) => {
        setUserAns(e.target.value)
        // console.log('triggered the onchange button')
    }

    onsubmit = (e) => {
        e.preventDefault()
        // console.log(userAns);
        checkAns();
        document.getElementById("numberInput").value='';
    }

    return (
        <div>
        
            <div className='box'>right:{count.right}</div>
            <div className='box'>wrong:{count.wrong}</div>
            <form onSubmit={()=>{console.log('sumbitted')}}>

                <input
                    className='check'
                    onChange={onchange}
                    type="text"
                    id="numberInput" 
                    name="numberInput" 
                    pattern="[0-9]*" 
                    required/>
                <br></br>
                <input
                    className='submitButton'
                    type="submit" 
                    value="Submit"/>
                     
            </form>

        </div>
    );
}

export default Check;