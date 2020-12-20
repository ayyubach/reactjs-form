import React,{useState} from 'react'
import './Form.css'
import Signup from './Signup'
import Success from './Success'
import Controller from './controller';

const Form = () => {

    
    const [isSubmitting,setIsSubmitting] = useState(false);
    
    function submitForm() {
        setIsSubmitting(true);
      }
    
    return (
        <div className='form-container'>
        <div className='form-left'>
        <img src='images/perso.svg' className='form-image'/>    
        </div>
        <div className='form-right'>
       {isSubmitting ? <Success /> : <Signup submitForm={submitForm}/> }  
        </div>    
        </div>
    )
}

export default Form
