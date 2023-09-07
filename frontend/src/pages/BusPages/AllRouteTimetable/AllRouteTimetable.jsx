import React, {useState} from 'react'
import './AllRouteTimetable.css'
import TopNavBar from '../../../components/TopNavBar'
import Button from '@mui/material/Button';
import UpdateTimetableModel from '../../../models/BusModels/UpdateTimetableModel/UpdateTimetableModel';

const RouteTimetable = () => {

    const[modalOpened,setModalOpened] = useState(false)

    const updateHandler = ()=>{
        setModalOpened(true)
    }

    return (
        <div>
            <TopNavBar header={'Route Timetable'} />

            <div className='d-flex flex-column gap-2 text-center p-3 mb-2'>
                <div className='d-flex flex-column gap-1 text-center mt-3'>
                    <h4 className='mb-0'>Envicta Travels</h4>
                    <span className='mb-2'>ND - 8080</span>
                    <h5>All Routes Timetable</h5>
                </div>

                <div className='routeUpdBtn mt-2 d-flex gap-2 p-3 justify-content-between align-items-center'>
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
            </div>
    )
}

export default RouteTimetable