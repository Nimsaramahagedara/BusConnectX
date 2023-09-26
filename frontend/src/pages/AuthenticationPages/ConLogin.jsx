import React, { useState } from 'react'
import axios from 'axios';
import './Login.css';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import blackLogo from '../../images/NewLogo.png'
import Box from '@mui/material/Box';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Authentication.css'
import Cookies from 'js-cookie';
import { Alert } from '@mui/material';


const ConLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}conductor/login`, {
        username: email,
        password: password,
      });
      // console.log(response.data.password)

      Cookies.set('user', JSON.stringify(response.data.user));
      Cookies.set('token', response.data.token);

      // Redirect to the dashboard

      navigate('/condashboard');

    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return (
    <div className="landingPageContainer mt-5">
      <div className="loginPageContainer d-flex flex-column align-items-center">

        {/* Image Container */}
        <div className="imgContainer mb-0 mt-5">
          <img src={blackLogo} alt='' />
        </div>
        <h6 className='text-cancel'>Conductor Login</h6>
        {
          error ? <Alert severity="error">{error}</Alert> : ''
        }

        {/* Button & company Container */}
        <form action="" className='loginform mt-4' onKeyDown={handleKeyPress}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='mt-3'>

            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

            <TextField fullWidth required label="Username : SPND1212" helperText='' value={email} variant="standard" onChange={e => setEmail(e.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className='mt-3'>
            <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField fullWidth required type='password' helperText='' value={password} label="Enter password" variant="standard" onChange={e => setPassword(e.target.value)} />
          </Box>

          <div className="text-content d-flex flex-column align-items-center mt-3">
            <Button fullWidth className='mb-4 mt-3 bg-cancel' variant="contained" size='large' onClick={handleSubmit} >Login</Button>

            <Link className='mb-4 text-cancel' to={'/'}>Forgot Password?</Link>

            <p>Dont have an account? <Link to={'/register'} className='text-cancel'>SignUp</Link></p>
          </div>

        </form>
        <p>Looking For Passenger Login? <Link to={'/login'}>Login</Link></p>

      </div>
    </div>
  )
}


export default ConLogin