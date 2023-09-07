import React, { useState } from 'react'
import TopNavBar from '../../components/TopNavBar'
import BusPhoto from '../../images/BusPhoto.webp'
import '../BusDetails.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const BookingDetails = () => {
    const [time, setTime] = useState(new Date());

    return (

        <div>
            <TopNavBar header={'Booking Details'} />
            <div className='bus-detail-container mt-1'>
                <div className="bus-image mt-5 p-4">
                    <img src={BusPhoto} alt="bus-image" className='' />
                </div>
                <div className="container-lg bus-model d-flex justify-content-center mt-3 p-3">
                    <strong>Micro Yutong <span>2018</span></strong>
                </div>
                <div className="container-lg mt-3">
                    <div className="row p-2">
                        <div className="col">Booking ID</div>
                        <div className="col">123456</div>
                    </div>
                    <div className="row p-2">
                        <div className="col">Reg No</div>
                        <div className="col">ND 3030</div>
                    </div>
                    <div className="row p-2">
                        <div className="col">Route No</div>
                        <div className="col">440</div>
                    </div>
                    <div className="row p-2">
                        <div className="col">From</div>
                        <div className="col">Panadura</div>
                    </div>
                    <div className="row p-2">
                        <div className="col">To</div>
                        <div className="col">Colombo</div>
                    </div>
                    <div className="row p-2">
                        <div className="col" >Seat No</div>
                        <div className="col bg-success" style={{ color: 'green', fontWeight:'bold'}}>42</div>
                    </div>
                    <div className="row p-2">
                        <div className="col">Time</div>
                        <div className="col">{time.toLocaleTimeString()}</div>
                    </div>
                    <div className="row p-2">
                        <div className="col">Bill</div>
                        <div className="col" style={{ fontWeight:'bold'}}>
                            <span style={{ color: 'green'}}>Paid</span> / <span style={{ color: 'red'}}>To Be Paid</span>
                        </div>
                    </div>
                    <div className="row p-2">
                        <div className="col">Price</div>
                        <div className="col">1600</div>
                    </div>
                    <div className="p-2 justify-content-center mt-3 bookingDetailsActions">
                        <Button variant="contained" size='large' className='bg-primary col-5'><PictureAsPdfIcon/></Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookingDetails