import React, {useState, useEffect} from 'react'
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

        const user = Cookies.get('user');
        if (user) {
            setUser(user);
        }
        
    }, [])

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
                            id="standard-password-input"
                            label="Name"
                            type="text"
                            variant="standard"
                            value={user.firstName}
                        />
                    </div>

                    <div className="userDetails">
                        <CallIcon />
                        <TextField fullWidth
                            id="standard-password-input"
                            label="Contact Number"
                            type="text"
                            variant="standard"
                            value={user.contactNumber}
                        />
                    </div>

                    <div className="userDetails">
                        <EmailIcon />
                        <TextField fullWidth
                            id="standard-password-input"
                            label="Email"
                            type="text"
                            variant="standard"
                            value={user.email}
                        />
                    </div>

                    <div className="userDetails">
                        <HttpsIcon />
                        <TextField fullWidth
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            variant="standard"
                            value={user.password}
                        />
                    </div>
                </div>

                <div className="userProfileActionsContainer">
                    <Button fullWidth variant="contained" className='mainBtn'>SAVE</Button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile