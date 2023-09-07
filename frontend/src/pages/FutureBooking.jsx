import React from 'react'
import './FutureBooking.css'
import TopNavBar from '../components/TopNavBar'

const FutureBooking = () => {
    return (
        <div className="futureBookingContainer">
            <TopNavBar header={'Available Busses'} />

            <div className="futureBookingContents">
                <div className="futureBookingDetails">
                    <img src = 'https://www.newswire.lk/wp-content/uploads/2023/01/Highway-bus.jpg' alt = '' />
                    <div className="futureBookingBusDetails">
                        <span style = {{fontSize:20, fontWeight:'bold'}}>Envicta Travels</span>
                        <span>Thangalle - Colombo</span>
                        <span style = {{color:'green'}}>06:00 - 11:00</span>
                    </div>
                </div>

                <span>SEE MORE</span>
            </div>
        </div>
    )
}

export default FutureBooking