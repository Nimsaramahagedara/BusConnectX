import React from 'react'
import TopNavBar from '../../../components/TopNavBar'
import '../../AllRouteTimetable/AllRouteTimetable.css'
import ashLogo from '../../../images/ash.png';
const OwnerOview = () => {
  return (
    <div className="timetableContainer p-0">
    <TopNavBar header='Íncome Overview' />
    <div className="timetableContents">
        <div className="regImageContainer text-center w-100">
              <img src={ashLogo} alt='' className='w-50'/>
        </div>
        <div className="timetableSchedules shadow-sm">
            <div className="routeDetails">
                <span>Cash Payments</span>
            </div>

            <div className="timetableActions">
                <h6 className="text-primary">5000</h6>
            </div>
        </div>
        <div className="timetableSchedules shadow-sm">
            <div className="routeDetails">
                <span>Card Payments</span>
            </div>

            <div className="timetableActions">
                <h6 className="text-primary">5000</h6>
            </div>
        </div>
        <div className="timetableSchedules shadow-sm">
            <div className="routeDetails">
                <span>Online Bookings</span>
            </div>

            <div className="timetableActions">
                <h6 className="text-primary">5000</h6>
            </div>
        </div>

        

    </div>
    <div className="timetableSchedules shadow-sm mt-5">
            <div className="routeDetails">
                <span>Total</span>
            </div>

            <div className="timetableActions">
                <h6 className="text-primary btn btn-outline-primary"><span>Rs . </span>5000</h6>
            </div>
        </div>
</div>
  )
}

export default OwnerOview;