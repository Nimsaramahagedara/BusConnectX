import React from 'react'
import './UserProfile.css'
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import WcIcon from '@mui/icons-material/Wc';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';

const UserProfile = () => {

    const navigate = useNavigate()

    const profileHandler = ()=>{
        navigate('/editProfile')
    }

    return (
        <div className="userProfileContainer">
            <TopNavBar header={'Profile'}/>
            <div className="userProfileContents">
                <div className="userProfileImageContainer">
                    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />

                    <div className="mainCredentials">
                        <h4>Shane Warne</h4>
                        <span>shane@gmail.com</span>
                    </div>
                </div>

                <div className="userDetailsContainer">
                    <div className="userDetails">
                        <PersonIcon />
                        <span>Name</span>
                    </div>

                    <div className="userDetails">
                        <CallIcon />
                        <span>Contact Number</span>
                    </div>

                    <div className="userDetails">
                        <WcIcon />
                        <span>Gender</span>
                    </div>

                    <div className="userDetails">
                        <EmailIcon />
                        <span>Email Address</span>
                    </div>
                </div>

                <div className="userProfileActionsContainer">
                    <Button variant="contained" className='editProfileBtn' onClick={profileHandler}>EDIT PROFILE</Button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile