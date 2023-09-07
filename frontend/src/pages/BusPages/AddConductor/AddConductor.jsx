import React, { useState } from 'react'
import './AddConductor.css'
import TopNavBar from '../../../components/TopNavBar'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Bus from '../../../images/bus.jpg'
import UpdateConductorModel from '../../../models/BusModels/UpdateConductorModel/UpdateConductorModel';

const AddConductor = () => {

    const [password, setPassword] = useState(false);
    const [confPassword, setConfPassword] = useState(false);
    const [modalOpened, setModalOpened] = useState(false)

    const handleClickShowPassword = () => setPassword((show) => !show);
    const handleClickShowConfPassword = () => setConfPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const updateHandler = () => {
        setModalOpened(true)
    }

    return (
        <div className="addConductorContainer">
            <TopNavBar header={'Conductor'} />

            <div className="d-flex flex-column p-3 gap-3 text-center">

                <div className='d-flex flex-column gap-1 mt-5'>
                    <h3 className='mb-0'>Envicta Travels</h3>
                    <span>Thangalle - Colombo</span>
                    <span>NB - 6673</span>
                </div>

                <h5 className='mb-0'>Add Conductor</h5>

                <div className="d-flex flex-column gap-2 p-3 shadow mb-2">
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Username"
                        defaultValue="NB6673"
                    />

                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={password ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {password ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={confPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {confPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>

                    <Button variant="contained" size='large' className='bg-primary'>ADD CONDUCTOR</Button>

                </div>

                <div className='viewConductor shadow'>
                    <img src={Bus} alt='' />

                    <div className='d-flex flex-column gap-1 text-center'>
                        <h4 className='mb-0'>Envicta Travels</h4>
                        <span>NB - 6673</span>
                        <Button variant="outlined" size='large' className='outlinedBtn' onClick={updateHandler}>UPDATE</Button>
                    </div>
                </div>
                <UpdateConductorModel
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                />
            </div>
        </div>
    )
}

export default AddConductor