import { Modal, useMantineTheme } from '@mantine/core';
import './CreateBookingModel.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function CreateBookingModel({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

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
                <h3 className='text-primary'><strong>Create New Booking</strong></h3>

                <div className="bookingInputData">
                    <div className="bookingInput">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Start</InputLabel>
                            <Select fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Start"
                                className='bookingDrop'
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="bookingInput">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Destination</InputLabel>
                            <Select fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Destination"
                                className='bookingDrop'
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="bookingInput">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                                    'DatePicker',
                                    'MobileDatePicker',
                                    'DesktopDatePicker',
                                    'StaticDatePicker',
                                ]}
                            >

                                <DemoItem>
                                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                                </DemoItem>
                                <DemoItem>
                                    <TimePicker
                                        label="Controlled picker"
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>

                <Button variant="contained" size='large' className='bg-primary'>CREATE BOOKING</Button>

            </form>


        </Modal>
    );
}

export default CreateBookingModel