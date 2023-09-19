import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Alert
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import authAxios from '../../../utils/authAxios';

function AddBusModel({ modalOpened, setModalOpened }) {
    const [busName, setBusName] = useState('');
    const [regNo, setRegNo] = useState('');
    const [routeNo, setRouteNo] = useState('');
    const [from, setFrom] = useState('Matara');
    const [to, setTo] = useState('Colombo');
    const [image, setImage] = useState('');
    const [open, setOpen] = useState(false)
    const [alertMessage, setMessage] = useState('')
    const [valid, setValid] = useState(true);

    const validateInput = (input) => {
        // Define a regular expression pattern to match the desired format
        const pattern = /^[A-Z]{2}\s[A-Z]{2}\s\d{4}$/;
    
        // Check if the input matches the pattern
        return pattern.test(input);
      };

    const handleClose = () => {
        setModalOpened(false);
    };

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const isValid = validateInput(inputValue);
    
        // Update the state and validate
        setRegNo(inputValue);
        setValid(isValid);
      };

    const handleSubmit = async () => {
        const newBus = {
            busName,
            regNo,
            routeNo,
            from,
            to
        }
        try {
            const result = await authAxios.post(`bus/create`, newBus)
            if (result) {
                setMessage('Bus Added Successfully')
                setOpen(true)
            }
        } catch (error) {
            setMessage(error.response.data.error)
            setOpen(true)
        }
        setTimeout(() => {
            setOpen(false)
        }, 2000)
    };
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    return (
        <Dialog open={modalOpened} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Add Bus</DialogTitle>
            {
                open && <Alert severity="error">{alertMessage}</Alert>
            }

            <DialogContent>
                <TextField
                    fullWidth
                    label="Bus Name"
                    variant="outlined"
                    value={busName}
                    onChange={(e) => setBusName(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Bus Number"
                    variant="outlined"
                    value={regNo}
                    onChange={handleChange}
                    margin="normal"
                    required
                    error={!valid}
                    helperText={!valid ? "Invalid format. Use 'AB CD 1234'" : ""}
                />
                <TextField
                    fullWidth
                    label="Route Number"
                    variant="outlined"
                    type="number"
                    value={routeNo}
                    onChange={(e) => setRouteNo(e.target.value)}
                    margin="normal"
                    required
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="from-select">From</InputLabel>
                    <Select
                        label="From"
                        id="from-select"
                        value={from}
                        onChange={handleFromChange}
                    >
                        <MenuItem value="Matara">Matara</MenuItem>
                        <MenuItem value="Galle">Galle</MenuItem>
                        <MenuItem value="Colombo">Colombo</MenuItem>
                        <MenuItem value="Jaffna">Jaffna</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="to-select">To</InputLabel>
                    <Select
                        label="To"
                        id="to-select"
                        value={to}
                        onChange={handleToChange}
                    >
                        <MenuItem value="Matara">Matara</MenuItem>
                        <MenuItem value="Galle">Galle</MenuItem>
                        <MenuItem value="Colombo">Colombo</MenuItem>
                        <MenuItem value="Jaffna">Jaffna</MenuItem>
                    </Select>
                </FormControl>
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-upload"
                    onChange={handleImageChange}
                />
                <label htmlFor="image-upload">
                    <Button
                        component="span"
                        variant="outlined"
                        startIcon={<CameraAltIcon />}
                    >
                        Upload Image
                    </Button>
                </label>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" variant="contained">
                    Add Bus
                </Button>
            </DialogActions>

        </Dialog>
    );
}

export default AddBusModel;
