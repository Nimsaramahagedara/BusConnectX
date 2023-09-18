import React, { useState, useEffect } from 'react'
import './UserProfile/UserProfile.css'
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TopNavBar from '../components/TopNavBar';
import Cookies from 'js-cookie'
import authAxios from '../utils/authAxios';

const EditProfile = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        gender: '',
        userType: '',
        email: '',
        password: '',
        Image: ''
    });
    useEffect(() => {

        const user = JSON.parse(Cookies.get('user'));
        user.password = '';
        if (user) {
            setUser(user);
        }

    }, [])

    // Handle changes in the input fields and update the state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleUpdate = async()=>{
        try {
            const res = await authAxios.put(`user/update/${user._id}`,user)
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="userProfileContainer">
            <TopNavBar header={'Edit Profile'} />
            <div className="userProfileContents">
                <div className="userProfileImageContainer">
                    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='' />

                    <div className="profileEditIcon">
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <EditIcon fontSize='large' />
                        </IconButton>
                    </div>
                </div>

                <div className="userDetailsContainer mt-5c">
                    <div className="userDetails">
                        <PersonIcon />
                        <TextField fullWidth
                            id="firstName"
                            label="First Name"
                            type="text"
                            name='firstName'
                            variant="standard"
                            value={user.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="userDetails">
                        <PersonIcon />
                        <TextField fullWidth
                            id="lastName"
                            label="Last Name"
                            type="text"
                            name='lastName'
                            variant="standard"
                            value={user.lastName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="userDetails">
                        <CallIcon />
                        <TextField fullWidth
                            id="contactNo"
                            label="Contact Number"
                            name='contactNumber'
                            type="text"
                            variant="standard"
                            value={user.contactNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="userDetails">
                        <EmailIcon />
                        <TextField fullWidth
                            id="email"
                            label="Email"
                            type="text"
                            name='email'
                            variant="standard"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="userDetails">
                        {/* <HttpsIcon />
                        <TextField fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            variant="standard"
                            name='password'
                            value={user.password}
                            onChange={handleInputChange}
                        /> */}
                        
                    </div>
                </div>

                <div className="userProfileActionsContainer">
                    <Button fullWidth variant="contained" className='mainBtn' onClick={handleUpdate}>SAVE</Button>
                    <Button onClick={()=>{window.alert('Coming Soon')}}>Change Password</Button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile