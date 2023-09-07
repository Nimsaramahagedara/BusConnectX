import React, { useState } from 'react'
import ashLogo from '../images/f9fc-white.png';
import DashboardBox from '../components/DashboardBox';
import './UserDash.css';
import PoweredBy from '../components/PoweredBy';
import busIcon from '../images/busimage.png';
import profile from '../images/profileimage.webp';
import cardIcon from '../images/cardimage.png';
import booking from '../images/bookingimage.png';


const UserDashBoard = () => {


  return (
    <div className='d-flex flex-column justify-content-around align-items-center dash-container'>
        <div className='logoContainer'>
            <img src={ashLogo} alt="logo" className='w-100'/>
        </div>
        <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
            <DashboardBox title={'Find Bus'} to={'/findbus'} Icon={busIcon}/>
            <DashboardBox title={'Bookings'} to={'/allbookings'} Icon={booking}/>
            <DashboardBox title={'Card Details'} to={'/addcard'} Icon={cardIcon}/>
            <DashboardBox title={'Profile'} to={'/profile'} Icon={profile}/>

        </div>
        <div><PoweredBy/></div>
    </div>
  )
}

export default UserDashBoard