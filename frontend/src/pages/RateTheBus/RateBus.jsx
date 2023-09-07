import React, { useState } from 'react'
import TopNavBar from '../../components/TopNavBar'
import BusPhoto from '../../images/BusPhoto.webp'
import './BusDetails.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import ReviewBox from '../../components/ReviewBox';



const RateBus = () => {
    const [ratings, setRatings] = useState(5);
    return (
    
        <div>
        <TopNavBar header={'Bus Details'}/>
        <div className='bus-detail-container mt-5'>
            <div className="bus-image mt-5 p-4">
                <img src={BusPhoto} alt="bus-image" className='' />
            </div>   
            <div className='w-100 text-center'>
            <strong className=''>Micro Yutong <span>2018</span></strong>
            </div>
            <div className="container-lg">
                <div className="card text-center">
                    <Rating name="read-only" value={ratings} size='large' className='mx-auto my-3'/>
                    <div className="card-body">
                        <TextField fullWidth/>
                        <Button variant='contained' className='bg-primary my-2' >Submit</Button>
                    </div>
                </div>
            </div>
            <div className="container-lg">
                <div className='d-flex justify-content-between my-4'>
                    <h6>Reviews</h6>
                    <h6>See All</h6>
                </div>
                
                <div className='d-flex flex-column gap-15'>
                    <ReviewBox/>
                    <ReviewBox/>
                </div>
            </div>
        </div>
        
        </div>
      )
}

export default RateBus