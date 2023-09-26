import React, { useState, useEffect } from 'react'
import './UserProfile.css'
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import WcIcon from '@mui/icons-material/Wc';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';
import axios from 'axios';
import Cookies from 'js-cookie'
import Logout from '../AuthenticationPages/Logout';
import authAxios from '../../utils/authAxios';

const UserProfile = () => {
    const [user, setUser] = useState({
        firstName: 'First Name',
        lastName: 'Last Name',
        contactNumber: 'Contact Number',
        gender: 'Gender',
        userType: 'Passenger',
        email: 'Email',
        password: ' ',
        Image: ' '
    });

    const navigate = useNavigate()
    const profileHandler = () => {
        navigate('/editProfile')
    }

    useEffect(() => {

        const getUser = async () => {
            try {
                const token = Cookies.get('token');
                if (token) {
                    const user =await authAxios.get('/user')
                    setUser(user.data);
                } else {
                    navigate('./login')
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUser();

    }, [])

    return (
        <>
            <TopNavBar header={'Profile'} />
            <div className="userProfileContents">
                <div className="userProfileImageContainer">
                    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />

                    <div className="mainCredentials">
                        <h4>{user.firstName + ' ' + user.lastName}</h4>
                        <span>{user.email}</span>
                    </div>
                </div>

                <div className="userDetailsContainer">
                    <div className="userDetails">
                        <PersonIcon />
                        <span>{user.firstName + ' ' + user.lastName}</span>
                    </div>

                    <div className="userDetails">
                        <CallIcon />
                        <span>{user.contactNumber}</span>
                    </div>

                    <div className="userDetails">
                        <WcIcon />
                        <span>{user.gender}</span>
                    </div>

                    <div className="userDetails">
                        <EmailIcon />
                        <span>{user.email}</span>
                    </div>
                </div>

                <div className="userProfileActionsContainer">
                    <Button variant="contained" className='editProfileBtn mb-3' fullWidth onClick={profileHandler}>EDIT PROFILE</Button>
                    <Logout />
                </div>
            </div>
        </>
    )
}

export default UserProfile