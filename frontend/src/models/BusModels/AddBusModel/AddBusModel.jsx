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
    Snackbar
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import authAxios from '../../../utils/authAxios';

function AddBusModel({ modalOpened, setModalOpened }) {
    const [busName, setBusName] = useState('');
    const [regNo, setRegNo] = useState('');
    const [routeNo, setRouteNo] = useState('');
    const [from, setFrom] = useState('Matara');
    const [to, setTo] = useState('Colombo');
    const [image, setImage] = useState('');
    const [open , setOpen] = useState(false)
    const [alertMessage , setMessage] = useState('')


    const handleClose = () => {
        setModalOpened(false);
    };

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    const handleFromChange = (event) => {
        setFrom(event.target.value);
    };

    const handleToChange = (event) => {
        setTo(event.target.value);
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
        setTimeout(()=>{
            setOpen(false)
        },2000)
    };
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    return (
        <Dialog open={modalOpened} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Add Bus</DialogTitle>
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
                    onChange={(e) => setRegNo(e.target.value)}
                    margin="normal"
                    required
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
            <Snackbar
                open={open}
                autoHideDuration={6000}
                // onClose={handleClose}
                message= {alertMessage}
                action={action}
            />

        </Dialog>
    );
}

export default AddBusModel;
