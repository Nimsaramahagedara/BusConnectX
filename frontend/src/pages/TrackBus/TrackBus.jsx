import React from 'react'
import './TrackBus.css'
import TopNavBar from '../../components/TopNavBar'
import Button from '@mui/material/Button';

const TrackBus = () => {
    return (
        <div className="trackBusContainer">
            <TopNavBar header={'Track Bus'} />

            <div className="trackBusContents">
                <div className="trackBusMainDetails">
                    <div className="trackBusImage">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIXXzTq6q906FX5yYkOxoQJWxwW-0hwXwTyQ&usqp=CAU' alt='' />
                    </div>

                    <div className="trackBusDetails">
                        <h3>Envicta Travels</h3>
                        <span style={{ fontSize: 20 }}>Thangalle - Colombo</span>
                    </div>
                </div>

                <span>View Bus Info</span>

                <div className="trackBusTimeContainer">
                    <div className="start">
                        <span style={{ color: 'green' }}>07:30</span>
                        <span>Thangalle</span>
                    </div>

                    <span style={{ color: 'green' }}>5H</span>

                    <div className="start">
                        <span style={{ color: 'green' }}>12:30</span>
                        <span>Colombo</span>
                    </div>
                </div>

                <div className="trackBusUpdate">
                    <span>Last update : 09:30</span>
                </div>

                <div className="trackBusBtnContainer">
                    <Button variant="contained" size='large' className='bg-primary'>SELECT SEAT</Button>
                </div>

                <div className="locationContainer">
                    <span>view in Google Maps[]</span>
                </div>
            </div>
        </div>
    )
}

export default TrackBus