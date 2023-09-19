import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Bus from '../../../images/bus.jpg'
import './AllBusses.css'
import AddBusModel from '../../../models/BusModels/AddBusModel/AddBusModel'
//import UpdateConductorModel from '../../../models/BusModels/UpdateConductorModel/UpdateConductorModel'
//import AddTimetableModel from '../../../models/BusModels/AddTimetableModel/AddTimetableModel'
import { useNavigate } from 'react-router-dom';
import TopNavBar from '../../../components/TopNavBar'
import axios from 'axios'
import EachBus from '../../../components/EachBus'
import authAxios from '../../../utils/authAxios'

const AllBusses = () => {

    const [addBusModalOpened, setAddBusModalOpened] = useState(false)
    const [allBus, setAllBus] = useState([])
    const navigate = useNavigate()

    const busHandler = () => {
        setAddBusModalOpened(true)
    }


    useEffect(() => {
        const getAll = async () => {
            try {
                const result = await authAxios.get(`bus/`)
                setAllBus(result.data)
            } catch (error) {
                console.log(error);
            }
        }
        getAll();  
    }, [])

    return (
        <div>
            <TopNavBar header={'All Busses'} />
            <div className="allBusses d-flex flex-column gap-3 text-center p-3">

                <Button className='bg-primary p-2 fs-5 ' variant="contained" onClick={busHandler}>Add Bus</Button>

                <AddBusModel
                    setModalOpened={setAddBusModalOpened}
                    modalOpened={addBusModalOpened}
                />

                {
                    allBus.map((bus, index) => (
                        <EachBus bus={bus} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AllBusses


