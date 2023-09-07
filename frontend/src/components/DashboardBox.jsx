import React from 'react'
import { Link } from 'react-router-dom'
import './DashboardBox.css';

const DashboardBox = ({style,to,Icon,title}) => (
    
    <>
    <Link to={to} style={style} className='dash-box position-relative d-flex flex-column align-items-center justify-content-center gap-1'>
        {Icon &&
        <div className='w-50'><img src={Icon} alt="" className='w-100'/></div>}
        <h5 className='text-white'>{title}</h5>
    </Link>
    
    
    </>
)

export default DashboardBox