import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
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
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { handleImageChange } from '../utils/ImagePreview';

const EditProfile = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        gender: '',
        userType: '',
        email: '',
        password: '',
    });
    const [image, setImage] = useState('');
    const [imageSrc, setImageSrc] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png');


    
    const navigate = useNavigate()

    useEffect(() => {

        const getUser = async () => {
            try {
                const token = Cookies.get('token');
                if (token) {
                    const user = await authAxios.get('/user')
                    setUser(user.data);
                    setImageSrc(user.data.image)
                } else {
                    navigate('./login')
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUser();

    }, [])

    // Handle changes in the input fields and update the state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleUpdate = async () => {
        const formData = new FormData();

        // Append form data to the FormData object
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('contactNumber', user.contactNumber);
        formData.append('email', user.email);

        // Append the image to FormData
        formData.append('image', image);
        try {
            const res = await authAxios.put(`user/update/${user._id}`, formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            console.log(res);
            navigate('../profile')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <TopNavBar header={'Edit Profile'} />
            <div className="userProfileContents">
                <div className="userProfileImageContainer">
                    <div className='rounded' style={{aspectRatio:'1/1', height:'200px'}}>
                    <img src={imageSrc} className='w-100 h-100 object-fit-contain' />
                    </div>
                    

                    <div className="profileEditIcon">
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <input
                                style={{ display: 'none' }}
                                type="file"
                                name='bus-image'
                                accept="image/*"
                                id="image-upload"
                                onChange={e=> handleImageChange(e,setImage,setImageSrc)}
                            />
                            <label htmlFor="image-upload">
                                <Button
                                    component="span"
                                    variant="contained"
                                    startIcon={<EditIcon fontSize='large' />}
                                >
                                    Upload Image
                                </Button>
                            </label>                        </IconButton>
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
                    <Button onClick={() => { window.alert('Coming Soon') }}>Change Password</Button>
                </div>
            </div>
        </>
    )
}

export default EditProfile