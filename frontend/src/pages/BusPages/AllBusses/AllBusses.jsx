import { Button } from '@mui/material'
import React, { useState } from 'react'
import Bus from '../../../images/bus.jpg'
import './AllBusses.css'
import AddBusModel from '../../../models/BusModels/AddBusModel/AddBusModel'
import UpdateConductorModel from '../../../models/BusModels/UpdateConductorModel/UpdateConductorModel'
import AddTimetableModel from '../../../models/BusModels/AddTimetableModel/AddTimetableModel'
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../../../components/TopNavBar'

const AllBusses = () => {

    const [addBusModalOpened, setAddBusModalOpened] = useState(false)
    const [addRouteModalOpened, setAddRouteModalOpened] = useState(false)
    const navigate = useNavigate()

    const busHandler = () => {
        setAddBusModalOpened(true)
    }

    const routeHandler = () => {
        setAddRouteModalOpened(true)
    }

    const condHandler = () => {
        navigate('/addConductor')
    }

    const detailsHandler = () => {
        navigate('/ownerbusdetails')
    }

    return (
        <div>
            <TopNavBar header={'All Busses'} />
            <div className="allBusses d-flex flex-column gap-3 text-center p-3">

                <Button className='bg-primary p-2 fs-5 ' variant="contained" onClick={busHandler}>Add Bus</Button>

                <AddBusModel
                    setModalOpened={setAddBusModalOpened}
                    modalOpened={addBusModalOpened}
                />

                <div className='displayAllBusses justify-content-around p-2'>
                    <img src={Bus} alt='' onClick={detailsHandler}/>
                    <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                        <h5 className='mb-0' onClick={detailsHandler}>Envicta Travels</h5>
                        <span onClick={detailsHandler}>Thangalle - Colombo</span>

                        <div className='d-flex gap-1'>
                            <Button variant="outlined" onClick={routeHandler}>+ Timetable</Button>
                            <Button variant="outlined" onClick={condHandler}>+ Cond</Button>
                        </div>

                        <AddTimetableModel
                            setModalOpened={setAddRouteModalOpened}
                            modalOpened={addRouteModalOpened}
                        />

                        {/* <UpdateConductorModel
                        setModalOpened={setAddConductorModalOpened}
                        modalOpened={addConductorModalOpened}
                    /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBusses