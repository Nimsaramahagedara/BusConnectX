import React from 'react'
import Rating from '@mui/material/Rating';
import userImg from '../images/profileimage.webp';
const ReviewBox = () => {
  return (
    <div className='shadow-sm d-flex justify-content-around '>
        <div style={{width:"10%"}}>
            <img src={userImg} alt="User Image" className='w-100'/>
        </div>
        <div className='w-50'>
            <h6>User name</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className='w-25'>
            <Rating/>
        </div>
    </div>
  )
}

export default ReviewBox