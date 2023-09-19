import React, { useState } from 'react'
import TopNavBar from '../components/TopNavBar'
import BusPhoto from '../images/BusPhoto.webp'
import './BusDetails.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const BusDetails = () => {
    const [ratings, setRatings] = useState(5);
    const navigate = useNavigate()

    const reviewsHandler = ()=>{
        navigate('/rate')
    }

  return (
    <div>
    <TopNavBar header={'Bus Details'}/>
    <div className='bus-detail-container'>
        <div className="bus-image p-4">
            <img src={BusPhoto} alt="bus-image" className='' />
        </div>
        <div className="container-lg bus-model d-flex justify-content-between mt-3 p-3">
            <strong>Micro Yutong <span>2018</span></strong>
            <Rating name="read-only" value={ratings} readOnly />
        </div>
        <div className="container-lg mt-3">
            <div className="row p-2">
                <div className="col">Status</div>
                <div className="col">Avtive</div>
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
                <div className="col">Route</div>
                <div className="col">Panadura <br/> Mahanuwara</div>
            </div>
            <div className="row p-2">
                <div className="col">Your Seat</div>
                <div className="col"><span>44</span> / 49</div>
            </div>
            <div className="row p-2">
                <div className="col">Seats</div>
                <div className="col"><span>44</span> / 49</div>
            </div>
            <div className="row p-2">
                <div className="col">Next Launch</div>
                <div className="col">4.00PM</div>
            </div>
            <div className="row p-2">
                <div className="col">From</div>
                <div className="col">Mahanuwara</div>
            </div>
            <div className="row p-2 justify-content-between mt-3">
                <Button variant="contained" size='large'  className='bg-primary col-8'>Book Now</Button>
                <Button variant="outlined" size='large'  className=' col-4' onClick = {reviewsHandler}>Reviews</Button>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default BusDetails