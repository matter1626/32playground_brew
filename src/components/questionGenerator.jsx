import React, { useEffect, useState } from 'react';
import Check from './check';

function Generator() {



    useEffect(()=> {
        console.log('setting up first function')
        newQuestion()
    },[])

    const[ans,setAns] = useState([])
    
    const newQuestion = () => {
        let divisor = Math.floor(Math.random()*10)
        console.log('divisor',divisor);

        let quotient = Math.floor(Math.random()*100)
        console.log('quotient',quotient);

        let dividend = quotient*divisor
        console.log('dividend',dividend);

        let quest = {
            divisor:divisor,
            dividend:dividend,
            quotient:quotient
        }
        setQuestion(quest);
        setAns(quotient);
    }

        const[question,setQuestion] = useState({
        divisor:0,
        dividend:0,
        quotient:0
    })
    return (
        <div>
            
            <br></br>
            <button onClick={()=>newQuestion()}>skip</button>
            <br></br>
            
            <div
                className='check'>
                <span>{question.dividend}</span>
                <span>&#247;</span>
                <span>{question.divisor}</span>
            </div>
            
            <Check
                qanny={newQuestion} 
                anny={ans}/>

        </div>
    );
}

export default Generator;