import React from 'react'
import './LandingPage.css'
import ashLogo from '../../images/ash.png'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate('/login');
    };
  return (
    <div className="landingPageContainer">
      <div className="landingPageContents">
        <div className="landingPage">

        {/* Image Container */}
        <div className="imgContainer">
          <img src = {ashLogo} alt = '' />
        </div>

        {/* Button & company Container */}
        <div className="details">
          <Button variant="contained" size='large' onClick={handleNavigate} className='bg-primary'>GET STARTED</Button>
          <span>Powered By Envicta Software</span>
        </div>

        </div>
      </div>
    </div>
  )
}

export default LandingPage