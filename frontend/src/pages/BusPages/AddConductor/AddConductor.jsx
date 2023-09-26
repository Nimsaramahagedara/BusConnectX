import React, { useEffect, useState } from 'react'
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
import authAxios from '../../../utils/authAxios';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Alert } from '@mui/material';

const AddConductor = () => {
    const { id } = useParams()
    const [error, setError] = useState(false)
    const [uname, setUname] = useState('');
    const [isAccExist, setAccExist] = useState(true)
    //Password Field Eye
    const [password, setPassword] = useState(false);
    const [confPassword, setConfPassword] = useState(false);
    //Password Field Value
    const [passwordValue, setPasswordValue] = useState('');
    const [confPasswordValue, setConfirmPassword] = useState('');

    const [modalOpened, setModalOpened] = useState(false)
    const [bus, setBus] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleClickShowPassword = () => setPassword((show) => !show);
    const handleClickShowConfPassword = () => setConfPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
        setPasswordsMatch(event.target.value === confPasswordValue);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === passwordValue);
    };

    const updateHandler = () => {
        setModalOpened(true)
    }
    //GET THE BUS DETAILS FRO ADD CONDUCTER
    useEffect(() => {
        const getBus = async () => {
            try {
                const Bus = await authAxios.get(`/bus/${id}`)
                setBus(Bus.data);
                const tempUname = Bus.data.regNo.split(' ')
                const conductorUsername = tempUname[0] + tempUname[1] + tempUname[2]
                setUname(conductorUsername);
                const isConAccExist = await authAxios.get(`/conductor/get/${conductorUsername}`);
                setAccExist(isConAccExist.data)
                //console.log(isConAccExist.data);
            } catch (error) {
                console.log(error);
            }

        }
        getBus();

    }, [])

    const handleSubmit = async () => {
        const data = {
            busId: bus._id,
            username: uname,
            password: passwordValue
        }
        try {
            const res = await authAxios.post('/conductor', data)
            if (res) {
                window.alert('Conductor added')
            }
        } catch (err) {
            const { error } = err.response.data
            setError(error);
            setTimeout(() => {
                setError(false)
            }, 2000)

        }
    }
    return (
        <div className="addConductorContainer">
            <TopNavBar header={'Conductor'} />

            <div className="d-flex flex-column p-3 gap-3 text-center">

                <div className='d-flex flex-column gap-1'>
                    <h3 className='mb-0'>{bus.busName}</h3>
                    <span>{bus.from} - {bus.to}</span>
                    <span>{bus.regNo}</span>
                </div>
                {
                    !isAccExist && <div className="d-flex flex-column gap-2 p-3 shadow-sm mb-2 bg-white">
                        <h5 className=''>Add Conductor</h5>
                        {
                            error && <Alert color='error'>{error}</Alert>
                        }

                        <TextField
                            disabled
                            id="outlined-disabled"
                            value={uname}
                            defaultValue={uname}
                        />

                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={password ? 'text' : 'password'}
                                onChange={handlePasswordChange}
                                error={!passwordsMatch}
                                value={passwordValue}
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
                            <InputLabel htmlFor="Confirmpassword">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="Confirmpassword"
                                type={confPassword ? 'text' : 'password'}
                                onChange={handleConfirmPasswordChange}
                                error={!passwordsMatch}
                                value={confPasswordValue}
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
                                label="Confirm Password"
                            />
                        </FormControl>

                        <Button variant="contained" size='large' className='bg-primary' onClick={handleSubmit}>ADD CONDUCTOR</Button>

                    </div>
                }

                <div className='viewConductor shadow-sm bg-white p-3 rounded'>
                    <img src={bus.image} alt='' className='w-100 h-100 object-fit-contain' />

                    <div className='d-flex flex-column gap-1 text-center'>
                        <h4 className='mb-0'>{bus.busName}</h4>
                        <span>{bus.regNo}</span>
                        <Button variant="outlined" size='large' className='outlinedBtn' onClick={updateHandler} disabled={!isAccExist}>{isAccExist ? 'Update' : 'Create Acc Before Update'}</Button>
                    </div>
                </div>
                <UpdateConductorModel
                    data={ isAccExist}
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}
                />
            </div>
        </div>
    )
}

export default AddConductor