import { useState } from 'react'
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

function UpdateConductorModel({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    const [password, setPassword] = useState(false);
    const [confPassword, setConfPassword] = useState(false);

    const handleClickShowPassword = () => setPassword((show) => !show);
    const handleClickShowConfPassword = () => setConfPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.10}
            overlayBlur={1}
            size='80%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='createBookingModal'>
                <h3 className='text-primary'><strong>Update Conductor</strong></h3>

                <div className='d-flex flex-column gap-3'>

                    <TextField fullWidth
                        id="standard-password-input"
                        label="Name"
                        type="text"
                        variant="outlined"
                    />

                    <TextField fullWidth
                        id="standard-password-input"
                        label="NIC"
                        type="text"
                        variant="outlined"
                    />

                    <TextField fullWidth
                        id="standard-password-input"
                        label="Contact Number"
                        type="text"
                        variant="outlined"
                    />

                    <TextField fullWidth
                        id="standard-password-input"
                        label="Reg Number (Optional)"
                        type="text"
                        variant="outlined"
                    />

                    <TextField fullWidth
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
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
                            label="Confirm Password"
                        />
                    </FormControl>
                </div>

                <Button variant="contained" size='large' className='bg-primary'>UPDATE CONDUCTOR</Button>

            </form>


        </Modal>
    );
}

export default UpdateConductorModel