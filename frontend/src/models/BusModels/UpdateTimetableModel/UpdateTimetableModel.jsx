import { Modal, useMantineTheme } from '@mantine/core';
import '../AddBusModel/AddBusModel.css'
import { Select } from '@mantine/core';
import Button from '@mui/material/Button';
import { TextInput } from '@mantine/core';
import { FileInput, rem } from '@mantine/core';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRef } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

function UpdateTimetableModel({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();
    const startRef = useRef()
    const endRef = useRef()

    return (
        <Modal
            overlaycolor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayopacity={0.10}
            overlayblur={1}
            size='80%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <form className='createBookingModal'>
                <h3 className='text-primary'><strong>Update Timetable</strong></h3>

                <div className="bookingInputData">

                    <div className="bookingInput">
                        <Select
                            placeholder="From"
                            searchable
                            nothingFound="No options"
                            data={['React', 'Angular', 'Svelte', 'Vue']}
                        />
                    </div>

                    <div className="bookingInput">
                        <Select
                            placeholder="To"
                            searchable
                            nothingFound="No options"
                            data={['React', 'Angular', 'Svelte', 'Vue']}
                        />
                    </div>

                    <div className="timeInput">
                        <div className="bookingInput">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DemoItem>
                                    <TimePicker
                                        label="Start Time"
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </div>

                        <div className="bookingInput">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DemoItem>
                                    <TimePicker
                                        label="End Time"
                                    />
                                </DemoItem>
                            </LocalizationProvider>
                        </div>

                    </div>

                    <div className="bookingInput">
                        <Select
                            placeholder="Daily/Weekday/Weekend"
                            searchable
                            nothingFound="No options"
                            data={['Daily', 'Weekday', 'Weekend']}
                        />
                    </div>

                    <Button variant="contained" size='large' className='bg-primary'>Update TIMETABLE</Button>
                </div>
            </form>


        </Modal>
    );
}

export default UpdateTimetableModel