import React, { useEffect, useState } from 'react';
import './Register.css';
import ashLogo from '../../images/ash.png';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';

const Register = () => {

  const [gender, setGender] = useState('Male');
  const [location, setLocation] = useState('Matara')
  const [userType, setUserType] = useState('Passenger');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContact] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  /*useEffect(() => {
    if(!passwordsMatch){
      console.log('Passwords not match');
    }else{
      console.log('Passwords match');
    }
    return () => {
      // Cleanup code (optional)
    };
  }, [passwordsMatch]);*/



  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit =async (e)=>{
    e.preventDefault();
    const data = {
      firstName: firstName,
      lastName : lastName,
      contactNumber: contactNo,
      gender: gender,
      userType: userType,
      email: email,
      password: password,
      Image: ''
    }

    try {
    const a = await axios.post(`http://localhost:10000/user/create`, data)
    const {user, token} = a.data;
    navigate('/login')

    } catch (er) {
      console.error('Registration error:', er);
      setError(er.response.data.error)
    }

  }


  return (
    <div className="registerContainer">
          {/* Details Container */}
          <form className="regDetailsContainer">
            <div className="regImageContainer">
              <img src={ashLogo} alt='' />
            </div>
            <div className="regDetails">
              <h4>User Registration</h4>
              {
                error ? <Alert severity="error">{error}</Alert> : ''
              }
              <div className="fullName">
                <TextField id="outlined-basic1" label="First Name" variant="outlined" required onChange={e=> setFirstName(e.target.value)} value={firstName}/>
                <TextField id="outlined-basic2" label="Last Name" variant="outlined" required onChange={e=> setLastName(e.target.value)} value={lastName}/>
              </div>

              <TextField fullWidth id="outlined-basic3" label="Contact Number" variant="outlined" onChange={e=>setContact(e.target.value)} value={contactNo}/>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  value={gender}
                  label="Gender"
                  onChange={handleGender}
                  required
                >
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Home</InputLabel>
                <Select
                  labelId="location"
                  id="location"
                  value={location}
                  label="Location"
                  onChange={handleLocation}
                  required
                >
                  <MenuItem value='Matara'>Matara</MenuItem>
                  <MenuItem value='Weligama'>Weligama</MenuItem>
                </Select>
              </FormControl>

              {/* <FormControl fullWidth>
                <InputLabel id="userType">User Type</InputLabel>
                <Select
                  labelId="userType"
                  id="userType"
                  value={userType}
                  label="userType"
                  onChange={handleUserType}
                  required
                >
                  <MenuItem value='Passenger'>Passenger</MenuItem>
                  <MenuItem value='Bus'>Bus</MenuItem>
                </Select>
              </FormControl> */}

              <TextField fullWidth id="outlined-basic4" label="Email" variant="outlined" onChange={e=> setEmail(e.target.value)} value={email}/>

              <div className="fullName">
                <TextField
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handlePasswordChange}
                value={password}
                error={!passwordsMatch}
                />
                <TextField
                id="password-input2"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                error={!passwordsMatch}
                />
              </div>
              
            </div>

            <div className="buttonContainer d-flex flex-column gap-3 text-center">
              <Button type='submit' variant="contained" className='bg-primary' onClick={handleSubmit}>Register</Button>

              <div className="haveAccount d-flex gap-1">
                <span>Already Have An Account? </span>
                <span><Link to='/login'><b>Sign In</b></Link></span>
              </div>
            </div>
          </form>
    </div>
  )
}

export default Register