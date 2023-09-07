import React from 'react'
import './BookingSuccess.css'
import TopNavBar from '../components/TopNavBar'
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';

const BookingSuccess = () => {
  return (
    <div className="bookingSuccessComponents">
        <TopNavBar header={'Success'} />

        <div className="bookingSuccessContents">
            <div className="successMessageContainer">
                <CheckIcon style={{ fontWeight: 'bold', color: 'white', fontSize:'100' }}/>
            </div>

            <h3>Card Added Successfully</h3>

            <div className="bookingSuccessBtn">
                <Button fullWidth variant="contained" className='mainBtn'>Done</Button>
            </div>
        </div>
    </div>
  )
}

export default BookingSuccess