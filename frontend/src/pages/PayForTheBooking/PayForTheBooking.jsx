import React, { useState } from 'react'
import './PayForTheBooking.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const PayForTheBooking = () => {

    const [time, setTime] = useState(new Date())

    return (
        <div className="payForTheBookingContainer">
            <div className="payForTheBookingContents">

                {/* Booking Heading */}
                <div className="headingContainer">
                    <h3>Pay for Booking</h3>
                </div>

                {/* Booking Details */}
                <div className="bookingContents">
                    <div className="bookingDetails">
                        <span>Bus Name</span>
                        <span>Envicta Travels</span>
                    </div>

                    <div className="bookingDetails">
                        <span>Reg No</span>
                        <span>NA-1212</span>
                    </div>

                    <div className="bookingDetails">
                        <span>From</span>
                        <span>Galle</span>
                    </div>

                    <div className="bookingDetails">
                        <span>To</span>
                        <span>Colombo</span>
                    </div>

                    <div className="bookingDetails">
                        <span>Route</span>
                        <span>Thangalle - Colombo</span>
                    </div>

                    <div className="bookingDetails">
                        <span>Route No</span>
                        <span>32</span>
                    </div>

                    <div className="bookingDetails">
                        <span>Seat No</span>
                        <span>50</span>
                    </div>

                    <div className="bookingDetails">
                        <span>Time</span>
                        <span>{time.toLocaleTimeString()}</span>
                    </div>
                </div>

                {/* ticket price */}

                <div className="ticketPrice">
                    <span>Total Price</span>
                    <span>Rs 1600</span>
                </div>

                <div class="bookingPaymentSelect" id="paymentSelect">

                    <div class="bookingCardImage">
                        <input type="radio" id="cardRadio" name="radio-buttons-group" value="card" />
                        <img src="https://seeklogo.com/images/M/master-card-logo-5806741801-seeklogo.com.png" alt="" />
                    </div>
                    
                    <div class="bookingCardDetails">
                        <span>**** **** **** 9874</span>
                        <span>Master Card</span>
                    </div>

                </div>

                <div className="bookingButtonsContainer">
                    <Button variant="contained" size='large' className='bg-primary'>PAY NOW</Button>
                    <Button variant="outlined" size='large' className='outlinedBtn'>CANCEL</Button>
                </div>
            </div>
        </div>
    )
}

export default PayForTheBooking