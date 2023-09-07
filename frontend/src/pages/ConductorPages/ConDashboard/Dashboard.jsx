import React, { useState } from 'react'
import ashLogo from '../../../images/f9fc-white.png';
import DashboardBox from '../../../components/DashboardBox';
import '../../UserDash.css';
import PoweredBy from '../../../components/PoweredBy';
import ticket from '../../../images/ticket.png';
import overview from '../../../images/overview.png';
import routeing from '../../../images/route.png';
import qricon from '../../../images/qrscan.webp';

const ConDashBoard = () => {

  return (
    <div className='d-flex flex-column justify-content-around align-items-center dash-container'>
        <div className='logoContainer'>
            <img src={ashLogo} alt="logo" className='w-100'/>
        </div>
        <div className='d-flex flex-wrap flex-column gap-3 justify-content-center align-items-center'>
            <DashboardBox title={'Quick Scan'} to={'/quickscan'} Icon={qricon}/>
            <DashboardBox title={'Ticketing'} to={'/conTicketing'} Icon={ticket}/>
            <DashboardBox title={'Routing'} to={'/route'} Icon={routeing}/>
            <DashboardBox title={'Overview'} to={'/overview'} Icon={overview}/>

        </div>
        <div><PoweredBy/></div>
    </div>
  )
}

export default ConDashBoard