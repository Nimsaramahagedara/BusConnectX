import React, { useState } from 'react'
import AddTimetableModel from '../models/BusModels/AddTimetableModel/AddTimetableModel'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const EachBus = ({bus}) => {
    const {_id,image,busName,routeNo,regNo,from,to} = bus
    const navigate = useNavigate()
    const [addRouteModalOpened, setAddRouteModalOpened] = useState(false)

    const routeHandler = () => {
        setAddRouteModalOpened(true)
    }

    const condHandler = (id) => {
        navigate(`/addConductor/${id}`)
    }

    const detailsHandler = () => {
        navigate(`/ownerbusdetails/${bus._id}`)
    }
    return (
        <div className='displayAllBusses justify-content-around p-2 shadow-sm rounded bg-white'>
            <div className='w-20'>
                <img src={image} alt='' onClick={detailsHandler} className='w-100 h-100 object-fit-contain' />
            </div>

            <div className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                <h5 className='mb-0' onClick={detailsHandler}>{busName}</h5>
                <span onClick={detailsHandler}>{from} - {to}</span>

                <div className='d-flex gap-1'>
                    {/* <Button variant="outlined" onClick={routeHandler}>+ Timetable</Button> */}
                    <Button variant="outlined" fullWidth onClick={()=>navigate(`/addConductor/${_id}`)}>+ Conductor</Button>
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
    )
}

export default EachBus