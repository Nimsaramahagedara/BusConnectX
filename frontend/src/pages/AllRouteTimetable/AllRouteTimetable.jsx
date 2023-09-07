import React from 'react'
import './AllRouteTimetable.css'
import Button from '@mui/material/Button';
import TopNavBar from '../../components/TopNavBar';

const AllRouteTimetable = () => {
    return (
        <div className="timetableContainer">
            <TopNavBar header = {'Timetable'}/>
            <div className="timetableContents p-3">

                <div className="timetableTitles">
                    <h3>Sun City Express</h3>
                    <span>ND-8080</span>
                </div>

                <h5>All Routes Timetable</h5>

                <div className="timetableSchedules shadow">
                    <div className="routeDetails">
                        <span>MATARA - COLOMBO</span>
                        <span>05:00 - 10:30</span>
                    </div>

                    <div className="timetableActions">
                        <Button variant="outlined" className='outlinedBtn'>UPDATE</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllRouteTimetable