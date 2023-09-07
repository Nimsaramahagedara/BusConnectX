import React from 'react';
import NotFoundImage from '../images/404.svg';
import PoweredBy from '../components/PoweredBy';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
const navigate = useNavigate();
const handleNavigate = ()=>{
    navigate('/')
}

  return (
    <div className='w-100 text-center position-relative d-flex flex-column align-items-center justify-content-center' style={{marginTop:'15vh'}}>
        <div className='mt-5'>
            <img src={NotFoundImage} alt="404 Not Found" className='w-50'/>
            <h6 className=''>404 NOT FOUND</h6>
            <Button className='mb-4 mt-3 bg-primary' variant="contained" size='large' onClick={handleNavigate}>Go Back</Button>
        </div>
        <PoweredBy/>
    </div>
  )
}

export default NotFound