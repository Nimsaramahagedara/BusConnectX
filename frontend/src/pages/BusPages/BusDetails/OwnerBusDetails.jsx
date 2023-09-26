import React, { useEffect, useState } from 'react'
import TopNavBar from '../../../components/TopNavBar'
import BusPhoto from '../../../images/BusPhoto.webp'
import '../../BusDetails.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import authAxios from '../../../utils/authAxios';

const OwnerBusDetails = () => {

    const [ratings, setRatings] = useState(5);
    const navigate = useNavigate()
    const {id} = useParams();
    const [bus , setBusDetails] = useState({});

    const timetableHandler = ()=>{
        navigate(`/routeTimetable/${id}`)
    }

    useEffect(()=>{
        const getBusDetails = async ()=>{
            const res = await authAxios.get(`/bus/${id}`)
            setBusDetails(res.data);
        }

        getBusDetails()
    },[])

  return (
    
    <>
    <TopNavBar header={'Bus Details'}/>
    <div className='bus-detail-container bg-white'>
        <div className="bus-image p-4 bg-info">
            <img src={bus.image} alt="bus-image" className='' />
        </div>
        <div className="container-lg bus-model d-flex justify-content-between mt-3 px-3 py-1">
            <strong>{bus.busName} <span>2018</span></strong>
            <Rating name="read-only" value={ratings} readOnly />
        </div>
        <hr/>
        <div className="container-lg">
            <div className="row p-2">
                <div className="col">Status</div>
                <div className="col">Avtive</div>
            </div>
            <div className="row p-2">
                <div className="col">Reg No</div>
                <div className="col">{bus.regNo}</div>
            </div>
            <div className="row p-2">
                <div className="col">Route No</div>
                <div className="col">{bus.routeNo}</div>
            </div>
            <div className="row p-2">
                <div className="col">Route</div>
                <div className="col">{bus.from} <br/> {bus.to}</div>
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
                <Button variant="contained" size='large'  className='bg-primary col-8'>Call Now</Button>
                <Button variant="outlined" size='large'  className=' col-4' onClick = {timetableHandler}>Timetable</Button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default OwnerBusDetails