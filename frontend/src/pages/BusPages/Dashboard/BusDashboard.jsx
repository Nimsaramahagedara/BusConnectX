import React, { useState } from 'react'
import ashLogo from '../../../images/f9fc-white.png'
import '../../UserDash.css'
import PoweredBy from '../../../components/PoweredBy';
import DashboardBox from '../../../components/DashboardBox';
import busIcon from '../../../images/busimage.png';
import profile from '../../../images/profileimage.webp';
import overview from '../../../images/overview.png';
import trips from '../../../images/route.png';

const BusDashboard = () => {

  return (
    <div className='d-flex flex-column justify-content-around align-items-center dash-container'>
        <div className='logoContainer'>
            <img src={ashLogo} alt="logo" className='w-100'/>
        </div>
        <div className='d-flex flex-wrap gap-1 justify-content-center align-items-center'>
            <DashboardBox title={'Busses'} to={'/allBusses'} Icon={busIcon}/>
            <DashboardBox title={'Overview'} to={'/busOverview'} Icon={overview}/>
            <DashboardBox title={'Trips'} to={''} Icon={trips} />
            <DashboardBox title={'Profile'} to={'/profile'} Icon = {profile}/>

        </div>
        <div><PoweredBy/></div>
    </div>
  )
}

export default BusDashboard