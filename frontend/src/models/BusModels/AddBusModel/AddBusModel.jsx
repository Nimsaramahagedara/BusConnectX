import { Modal, useMantineTheme } from '@mantine/core';
import './AddBusModel.css'
import { Select } from '@mantine/core';
import Button from '@mui/material/Button';
import { TextInput } from '@mantine/core';
import { FileInput, rem } from '@mantine/core';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function AddBusModel({ modalOpened, setModalOpened }) {
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
                <h3 className='text-primary'><strong>Add Bus</strong></h3>

                <div className="bookingInputData">

                    <TextInput
                        placeholder="Bus Name"
                        inputWrapperOrder={['label', 'error', 'input', 'description']}
                    />

                    <TextInput
                        placeholder="Bus Number"
                        inputWrapperOrder={['label', 'error', 'input', 'description']}
                    />

                    <TextInput
                        type='number'
                        placeholder="Route Number"
                        inputWrapperOrder={['label', 'error', 'input', 'description']}
                    />

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

                    <div className="bookingInput">
                        <FileInput placeholder="Bus Image" icon={<CameraAltIcon size={rem(10)} />} />;
                    </div>

                </div>
                <Button variant="contained" size='large' className='bg-primary'>CREATE BOOKING</Button>

            </form>


        </Modal>
    );
}

export default AddBusModel