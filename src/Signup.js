import React from 'react'
import Controller from './controller';

function Signup( {submitForm} ) {

    const { handleChange, handleSubmit, values, errors  } = Controller(submitForm);

    return (
        <form className='form' onSubmit={handleSubmit} noValidate>
        <h1>Get started with us !</h1>
        <p>Create your account by filling out the information below.</p>
        <div className='inputs'>
        <label htmlFor='username'> UserName</label>
        <input className='input' type='text' name='username' placeholder='Enter your username' 
        value={values.username} onChange={handleChange}/>
        {errors.username && <p className='error-input'>{errors.username}</p>}
        <label htmlFor='email'> Email</label>
        <input className='input' type='text' name='email' placeholder='Enter your email' 
        value={values.email} onChange={handleChange} />
        {errors.email && <p className='error-input'>{errors.email}</p>}
        <label htmlFor='password'> Password</label>
        <input className='input' type='password' name='password' placeholder='Enter your password' 
        value={values.password} onChange={handleChange}/>
        {errors.password && <p className='error-input'>{errors.password}</p>}
        <label htmlFor='password2'> Confirm Password</label>
        <input className='input' type='password' name='password2' placeholder='Confirm your password' 
        value={values.password2} onChange={handleChange}/>
        {errors.password2 && <p className='error-input'>{errors.password2}</p>}
        <button className='form-btn-signup' type='submit'>Sign up</button>    
        </div>
        </form> 
    )
}

export default Signup
