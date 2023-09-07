import React, { useEffect, useState } from 'react';
import './Register.css';
import ashLogo from '../../images/ash.png';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Register = () => {

  const [gender, setGender] = useState('Male');
  const [userType, setUserType] = useState('Passenger');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNo, setContact] = useState('');
  const [email, setEmail] = useState('');

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

  const handleUserType = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(passwordsMatch);
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
                  labelId="gender"
                  id="gender"
                  value={gender}
                  label="Gender"
                  onChange={handleGender}
                  required
                >
                  <MenuItem value='Male'>Matara</MenuItem>
                  <MenuItem value='Female'>Weligama</MenuItem>
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