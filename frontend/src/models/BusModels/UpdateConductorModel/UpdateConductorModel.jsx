import { useEffect, useState } from 'react'
import { Modal, useMantineTheme } from '@mantine/core';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import authAxios from '../../../utils/authAxios';

function UpdateConductorModel({ modalOpened, setModalOpened, data }) {
    const [name, setName] = useState(data.name)
    const [nic, setNic] = useState(data.nic)
    const [contactNo, setContactNo] = useState(data.contactNo)
    const [regNo, setRegNo] = useState(data.regNo);

    const theme = useMantineTheme();

    const [password, setPassword] = useState(false);
    const [confPassword, setConfPassword] = useState(false);

    const handleClickShowPassword = () => setPassword((show) => !show);
    const handleClickShowConfPassword = () => setConfPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        const dd = {
            username : data.username,
            name,
            nic,
            contactNo,
            regNo
        }
        try {
            const result = authAxios.put(`conductor/${dd.username}`,dd)
            if(result){
                alert('Conductor updated')
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        setName(data.name)
        setContactNo(data.contactNo)
        setNic(data.nic)
        setRegNo(data.regNo)
    },[data])

    return (
        <Modal
            overlaycolor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayopacity={0.10}
            overlayblur={1}
            size='100%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='createBookingModal'>
                <h3 className='text-primary'><strong>Update Conductor</strong></h3>

                <div className='d-flex flex-column gap-3'>

                    <TextField fullWidth
                        id="Name"
                        label="Name"
                        type="text"
                        variant="outlined"
                        onChange={e => setName(e.target.value)}
                        // defaultValue={name}
                        value={name}
                    />

                    <TextField fullWidth
                        id="NIC"
                        label="NIC"
                        type="text"
                        variant="outlined"
                        onChange={e => setNic(e.target.value)}
                        value={nic}
                    />

                    <TextField fullWidth
                        id="ContactNo"
                        label="Contact Number"
                        type="text"
                        variant="outlined"
                        onChange={e => setContactNo(e.target.value)}
                        value={contactNo}
                    />

                    <TextField fullWidth
                        id="RegNo"
                        label="Reg Number (Optional)"
                        type="text"
                        variant="outlined"
                        onChange={e => setRegNo(e.target.value)}
                        value={regNo}
                    />

                    <TextField fullWidth
                        disabled
                        id="outlined-disabled"
                        label="Username"
                        value={data.username}
            
                    />

                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
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
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="Confirmpassword"
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
                            label="Confirm Password"
                        />
                    </FormControl>
                </div>

                <Button variant="contained" size='large' className='bg-primary' onClick={handleSubmit}> UPDATE</Button>

            </form>


        </Modal>
    );
}

export default UpdateConductorModel