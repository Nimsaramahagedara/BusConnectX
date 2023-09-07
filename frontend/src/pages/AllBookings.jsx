import React, {useState} from 'react'
import TopNavBar from '../components/TopNavBar'
import Button from '@mui/material/Button';
import './AllBookings.css'
import CreateBookingModel from '../models/PassengerModels/CreateBookingModel/CreateBookingModel';

const AllBookings = () => {

    const[modalOpened,setModalOpened] = useState(false)

    const bookingModalHandler = ()=>{
        setModalOpened(true)
    }

    return (
        <div className="allBookingsContainer">
            <TopNavBar header={'All Bookings'} />

            <div className="allBookingsContents">

                <div className="allBookingsBtn">
                    <Button variant="contained" size='large' className='mainBtn bg-primary' onClick={bookingModalHandler}>CREATE NEW BOOKING</Button>
                </div>

                <div className="recentBookings">
                    <div className="recentTitles">
                        <span>Recent</span>
                        <span>See All</span>
                    </div>

                    <div className="recentContents">
                        <div className="bookingBusTitle">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_13psQJJCg1Qvlhnw94ttcr0PvAON8HhSMg&usqp=CAU' alt='' />
                            <div className="busTitle">
                                <h4>Envicta Travels</h4>
                                <span className='routeSpan'>117</span>
                            </div>
                        </div>

                        <div className="bookingBusRoute">
                            <span>Thangalle - Colombo</span>
                            <span>06:00-11:00</span>
                        </div>

                        <span>View More</span>
                    </div>
                </div>

                <div className="completedBookings">
                    <div className="recentTitles">
                        <span>Completed</span>
                        <span>See All</span>
                    </div>

                    <div className="recentContents">
                        <div className="bookingBusTitle">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_13psQJJCg1Qvlhnw94ttcr0PvAON8HhSMg&usqp=CAU' alt='' />
                            <div className="busTitle">
                                <h4>Envicta Travels</h4>
                                <div className="completetionTag">
                                    <span className='routeSpan'>117</span>
                                    <span>Completed</span>
                                </div>

                            </div>
                        </div>

                        <div className="bookingBusRoute">
                            <span>Thangalle - Colombo</span>
                            <span>06:00-11:00</span>
                        </div>

                        <span>Rate</span>
                    </div>
                </div>
            </div>
            <CreateBookingModel 
                        modalOpened = {modalOpened}
                        setModalOpened={setModalOpened}
                    />
        </div>
        
    )
}

export default AllBookings