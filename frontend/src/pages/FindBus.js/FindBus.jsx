import React, { useState } from 'react'
import './FindBus.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const FindBus = () => {

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [time, setTime] = useState(new Date())
    const navigate = useNavigate()

    const busHandler = ()=>{
        navigate('/busdetails')
    }

    return (
        <div className="findBusContainer">
            <div className="findBusContents">

                {/* Find bus form */}
                <div className="findBusForm">
                    <h2>Find a Bus</h2>

                    <div className="findBusInputs">
                        <TextField fullWidth id="outlined-basic1" label="From" variant="outlined" required onChange={e => setFrom(e.target.value)} value={from} />
                        <TextField fullWidth id="outlined-basic1" label="To" variant="outlined" required onChange={e => setTo(e.target.value)} value={to} />
                        <TextField fullWidth id="outlined-basic1" label="From" variant="outlined" required value={time} disabled />
                    </div>

                    <div className="buttonContainer">
                        <Button variant="contained" className='editProfileBtn'>Find Bus</Button>
                        <Button variant="outlined" className='outlinedBtn'>Cancel</Button>
                    </div>
                </div>

                {/* Display search results container */}
                <div className="results">
                    <h1>Available Buses</h1>

                    <div className="availableBusContainer" onClick = {busHandler}>
                        <div className="availableBusImage">
                            <img src='https://www.newswire.lk/wp-content/uploads/2023/01/Highway-bus.jpg' alt='' />
                        </div>

                        <div className="availableBusDetails">
                            <span>Envicta Travels</span>
                            <span>Matara-Colombo</span>
                            <span style={{ color: 'green' }}>12:00-17:00</span>
                        </div>
                    </div>
                </div>

                <div className="availableBusSeeMore">
                    <span style = {{color:'#6528F7'}}>SEE MORE</span>
                </div>
            </div>
        </div>
    )
}

export default FindBus