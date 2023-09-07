import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const TopNavBar = ({header}) => {
  const goBack = () => {
    window.history.back(); // Navigate back using browser history
  };
  return (
    <div className='position-relative top-0 left-0 w-100 bg-white p-3 text-center shadow-sm'>
        <Link onClick={goBack} className='position-absolute' style={{left:'10px', top:'10px'}}><ArrowBackIosIcon/></Link>
        <h6 className=' mb-0'>{header}</h6>
    </div>
  )
}

export default TopNavBar