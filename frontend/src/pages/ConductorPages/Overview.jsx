import React from 'react'
import TopNavBar from '../../components/TopNavBar'
import '../AllRouteTimetable/AllRouteTimetable.css'

const Overview = () => {
    return (
        <div className="timetableContainer">
            <TopNavBar header='Íncome Overview' />
            <div className="timetableContents p-3">
                <div className="timetableTitles">
                    <h3>Sun City Express</h3>
                    <span>ND-8080</span>
                </div>
                <div className="timetableSchedules shadow">
                    <div className="routeDetails">
                        <span>Cash Payments</span>
                    </div>

                    <div className="timetableActions">
                        <h6 className="text-primary">5000</h6>
                    </div>
                </div>
                <div className="timetableSchedules shadow">
                    <div className="routeDetails">
                        <span>Card Payments</span>
                    </div>

                    <div className="timetableActions">
                        <h6 className="text-primary">5000</h6>
                    </div>
                </div>
                <div className="timetableSchedules shadow">
                    <div className="routeDetails">
                        <span>Online Bookings</span>
                    </div>

                    <div className="timetableActions">
                        <h6 className="text-primary">5000</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview