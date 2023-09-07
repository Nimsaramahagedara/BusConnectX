import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import blackLogo from '../../images/NewLogo.png'
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import GoogleAuth from './GoogleAuth';
import './Authentication.css'


const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   console.log(password)
    try {
      const response = await axios.post('http://localhost:10000/user/login', {
        email: email,
        password: password,
      });
      console.log(response.data.password)

      // Reset the form fields
      // setEmail('');
      // setPassword('');

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="landingPageContainer mt-5">
      <div className="loginPageContainer d-flex flex-column align-items-center">

        {/* Image Container */}
        <div className="imgContainer mb-0 mt-5">
          <img src = {blackLogo} alt = '' />
        </div>

        {/* Button & company Container */}
        <form action="" className='loginform mt-4' >
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='mt-3'>
          
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          
          <TextField fullWidth required label="Enter email" helperText='' value={email} variant="standard" onChange={e=>setEmail(e.target.value)}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='mt-3'>
          <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField fullWidth required type='password' helperText='' value={password} label="Enter password" variant="standard" onChange={e=>setPassword(e.target.value)}/>
        </Box>

        <div className="text-content d-flex flex-column align-items-center mt-3">
        <Button fullWidth className='mb-4 mt-3 bg-primary' variant="contained" size='large' onClick={handleSubmit} >Login</Button>
        {/* <Link to={'/googleauth'} className='d-flex align-items-center mb-5'> <GoogleIcon/>Sign in with Google</Link> */}
        <GoogleAuth className='rounded mb-4 mt-3 bg-primary containauth'  />
        <Link className='mb-4' to={'/'}>Forgot Password?</Link>

        <p>Dont have an account? <Link to={'/register'}>SignUp</Link></p>
        </div>
        
        </form>

        </div>
    </div>
  )
}


export default Login