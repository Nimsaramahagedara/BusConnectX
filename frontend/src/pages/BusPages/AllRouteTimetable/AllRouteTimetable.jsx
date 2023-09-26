import React, {useEffect, useState} from 'react'
import TopNavBar from '../../../components/TopNavBar'
import Button from '@mui/material/Button';
import UpdateTimetableModel from '../../../models/BusModels/UpdateTimetableModel/UpdateTimetableModel';
import { useParams } from 'react-router-dom';
import authAxios from '../../../utils/authAxios';

const RouteTimetable = () => {
    const {id} = useParams()
    const[modalOpened,setModalOpened] = useState(false)
    const [bus, setBusDetails] = useState('');
    const updateHandler = ()=>{
        setModalOpened(true)
    }

    useEffect(()=>{
        const getBusDetails = async ()=>{
            const res = await authAxios.get(`/bus/${id}`)
            setBusDetails(res.data);
        }

        getBusDetails()
    },[])

    // useEffect(()=>{
    //     const promise = new Promise(async (resolve, reject)=>{
    //         const res =await authAxios.get(`/bus/${id}`)
    //         if(res){
    //             console.log(res.data);
    //             resolve(res.data)
    //         }else{
    //             reject('Error on fetching')
    //         }
    //     })
    //     promise.then((data)=>{
    //         console.log(data);
    //         setBusDetails(data)
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
        
    // },[])

    return (
        <>
            <TopNavBar header={'Route Timetable'} />

            <div className='d-flex flex-column gap-2 text-center p-3 mb-2'>
                <div className='d-flex flex-column gap-1 text-center mt-3'>
                    <h4 className='mb-0'>{bus.busName}</h4>
                    <span className='mb-2'>{bus.regNo}</span>
                    <h5>All Routes Timetable</h5>
                </div>

                <div className='routeUpdBtn mt-2 d-flex gap-2 p-3 justify-content-between align-items-center shadow-sm bg-white rounded'>
                    <div>
                        <h5>Matara - Colombo</h5>
                        <span className='fs-5'>05:00 - 10:30</span>
                    </div>
                    <Button variant="outlined" size='large' className='outlinedBtn' onClick={updateHandler}>UPDATE</Button>

                    <UpdateTimetableModel
                        modalOpened={modalOpened}
                        setModalOpened={setModalOpened}
                    />
                </div>
                </div>
            </>
    )
}

export default RouteTimetable