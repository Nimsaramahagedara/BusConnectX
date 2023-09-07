import React, { useState } from 'react'
import '../AllRouteTimetable/AllRouteTimetable.css'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TopNavBar from '../../components/TopNavBar';

const ConRouting = () => {
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading((prev)=> !prev);
    }
    return (
        <div className="timetableContainer">
            <TopNavBar header = {'Route Timetable'} />
            <div className="timetableContents p-3">

                <div className="timetableTitles">
                    <h3 className='mb-0'>Sun City Express</h3>
                    <span className='fs-4'>ND-8080</span>
                </div>

                <div className="timetableSchedules shadow">
                    <div className="routeDetails">
                        <span>MATARA - COLOMBO</span>
                        <span>05:00 - 10:30</span>
                    </div>

                    <div className="timetableActions">
                    <FormControlLabel
                        sx={{
                        display: 'block',
                        }}
                        control={
                        <Switch
                            onClick={handleClick}
                            checked={loading}
                            name="loading"
                            color="primary"
                        />
                        }
                    />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConRouting