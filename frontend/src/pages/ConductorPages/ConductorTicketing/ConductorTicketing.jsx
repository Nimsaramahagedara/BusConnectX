import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './ConductorTicketing.css'
import { Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';

const ConductorTicketing = () => {

    const navigate = useNavigate()

    const ticketingHandler = ()=>{
        navigate('/ticket')
    }

    return (
        <div className="conductorTicketing p-2 text-align-center d-flex flex-column gap-3">
            <div className="displayContainer p-4 shadow m-2 d-flex flex-column gap-3">
                <div className="ticketDetails align-items-center">
                    <h4>From</h4>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">From</InputLabel>
                        <Select fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="From"
                            className='bookingDrop'

                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="ticketDetails align-items-center">
                    <h4>To</h4>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">To</InputLabel>
                        <Select fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="To"
                            className='bookingDrop'
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="ticketDetails ticket align-items-center">
                    <h4>Cost</h4>
                    <TextField id="outlined-basic1" label="No.of Tickets" variant="outlined" />
                </div>

                <div className="ticketDetails ticket align-items-center">
                    <h4>No.of Tickets</h4>
                    <TextField id="outlined-basic1" label="No.of Tickets" variant="outlined" />
                </div>

                <div className="ticketDetails ticket align-items-center">
                    <h4>Total</h4>
                    <TextField id="outlined-basic1" label="No.of Tickets" variant="outlined" />
                </div>
            </div>

            <div className="tickteNumbering shadow-lg p-4 m-2 w-80">
                <div className="btnClmn w-100">
                    <Button className = 'ticketingBtns' variant="outlined">1</Button>
                    <Button className = 'ticketingBtns' variant="outlined">2</Button>
                    <Button className = 'ticketingBtns' variant="outlined">3</Button>
                </div>

                <div className="btnClmn">
                    <Button className = 'ticketingBtns' variant="outlined">4</Button>
                    <Button className = 'ticketingBtns' variant="outlined">5</Button>
                    <Button className = 'ticketingBtns' variant="outlined">6</Button>
                </div>

                <div className="btnClmn">
                    <Button className = 'ticketingBtns' variant="outlined">7</Button>
                    <Button className = 'ticketingBtns' variant="outlined">8</Button>
                    <Button className = 'ticketingBtns' variant="outlined">9</Button>
                </div>

                <div className="btnClmn">
                    <Button className = 'ticketingBtns' variant="outlined"><ArrowUpwardIcon /></Button>
                    <Button className = 'ticketingBtns' variant="outlined">0</Button>
                    <Button className = 'ticketingBtns' variant="outlined"><ArrowDownwardIcon /></Button>
                </div>

                <div className="btnClmn">
                    <Button className = 'ticketingBtns controls' variant="contained bg-secondary">PREV</Button>
                    <Button className = 'ticketingBtns controls' variant="contained bg-secondary">NEXT</Button>
                    <Button className = 'ticketingBtns controls' variant="contained back-cancel">CANC</Button>
                </div>

                <div className="btnClmn">
                    <Button className = 'ticketingBtns controls bg-primary' fullWidth variant="contained" onClick={ticketingHandler}>PRINT</Button>
                </div>

            </div>
        </div>
    )
}

export default ConductorTicketing