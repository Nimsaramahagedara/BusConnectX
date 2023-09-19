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
import Cookies from 'js-cookie';
import { Alert } from '@mui/material';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}user/login`, {
        email: email,
        password: password,
      });
      // console.log(response.data.password)

      Cookies.set('user', JSON.stringify(response.data.user));
      Cookies.set('token', response.data.token);

      const { userType } = response.data.user

      // Redirect to the dashboard
      if (userType == 'passenger') {
        navigate('/user/dashboard');
      } else if (userType == 'owner') {
        navigate('/busDashboard');
      } else if (userType == 'admin') {
        navigate('/admin/dashboard');
      } else if (userType == 'conductor') {
        navigate('/condashboard');
      }

    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  };
  return (
    <div className="landingPageContainer mt-5">
      <div className="loginPageContainer d-flex flex-column align-items-center">

        {/* Image Container */}
        <div className="imgContainer mb-0 mt-5">
          <img src={blackLogo} alt='' />
        </div>
        {
          error ? <Alert severity="error">{error}</Alert> : ''
        }

        {/* Button & company Container */}
        <form action="" className='loginform mt-4' >
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='mt-3'>

            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

            <TextField fullWidth required label="Enter email" helperText='' value={email} variant="standard" onChange={e => setEmail(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='mt-3'>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth required type='password' helperText='' value={password} label="Enter password" variant="standard" onChange={e => setPassword(e.target.value)} />
          </Box>

          <div className="text-content d-flex flex-column align-items-center mt-3">
            <Button fullWidth className='mb-4 mt-3 bg-primary' variant="contained" size='large' onClick={handleSubmit} >Login</Button>
            {/* <Link to={'/googleauth'} className='d-flex align-items-center mb-5'> <GoogleIcon/>Sign in with Google</Link> */}
            <GoogleAuth className='rounded mb-4 mt-3 bg-primary containauth' />
            <Link className='mb-4' to={'/'}>Forgot Password?</Link>

            <p>Dont have an account? <Link to={'/register'}>SignUp</Link></p>
          </div>

        </form>

      </div>
    </div>
  )
}


export default Login