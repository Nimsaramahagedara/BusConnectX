import Login from "../pages/AuthenticationPages/Login";
import Logout from "../pages/AuthenticationPages/Logout";
import Register from "../pages/AuthenticationPages/Register";
import LandingPage from "../pages/LandingPage/LandingPage";
import { Routes, Route } from 'react-router-dom';
import UserDashBoard from "../pages/UserDashBoard";
//APP SASS FILE WITH BOOTSTRAP CSS PLUS THEME CONFIGURATIONS
import './App.scss';
import NotFound from "../pages/NotFound";
import FindBus from "../pages/FindBus.js/FindBus";
import UserProfile from "../pages/UserProfile/UserProfile";
import PayForTheBooking from "../pages/PayForTheBooking/PayForTheBooking";
import AllRouteTimetable from "../pages/AllRouteTimetable/AllRouteTimetable";
import AddCard from "../pages/AddCard/AddCard";
import BusDetails from "../pages/BusDetails";
import BookingDetails from "../pages/BookingDetails/BookingDetails";
import TrackBus from "../pages/TrackBus/TrackBus";
import RateBus from "../pages/RateTheBus/RateBus";
import SeatSelect from "../pages/SeatSelection/SeatSelect";
import AllBookings from "../pages/AllBookings";
import BookingSuccess from "../pages/BookingSuccess";
import EditProfile from "../pages/EditProfile";
import FutureBooking from "../pages/FutureBooking";
import ConDashBoard from "../pages/ConductorPages/ConDashboard/Dashboard";
import ConRouting from "../pages/ConductorPages/ConRouting";
import Overview from "../pages/ConductorPages/Overview";
import Test from "../pages/ConductorPages/Test";
import QuickScan from "../pages/ConductorPages/QuickScan";
import Tickets from "../pages/ConductorPages/Tickets/Tickets";
import ConductorTicketing from "../pages/ConductorPages/ConductorTicketing/ConductorTicketing";
import ScanningTicket from "../pages/ConductorPages/ScanningTicket/ScanningTicket";
import BusDashboard from "../pages/BusPages/Dashboard/BusDashboard";
import AllBusses from "../pages/BusPages/AllBusses/AllBusses";
import AddConductor from "../pages/BusPages/AddConductor/AddConductor";
import RouteTimetable from "../pages/BusPages/AllRouteTimetable/AllRouteTimetable";
import OwnerBusDetails from "../pages/BusPages/BusDetails/OwnerBusDetails";
import OwnerOview from "../pages/BusPages/Overview/OwnerOview";
import GoogleAuth from "../pages/AuthenticationPages/GoogleAuth";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/googleauth' element={<GoogleAuth />} />
        <Route path='/test' element={<Test />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/user/dashboard" element={<UserDashBoard />}></Route>
        <Route path='/findBus' element={<FindBus />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/busdetails' element={<BusDetails />} />
        <Route path='/addcard' element={<AddCard />} />
        <Route path='/payForBooking' element={<PayForTheBooking />} />
        <Route path='/allRouteTimetable' element={<AllRouteTimetable />} />
        <Route path='/userBookingDetails' element={<BookingDetails />} />
        <Route path='/trackBus' element={<TrackBus />} />
        <Route path='/rate' element={<RateBus />} />
        <Route path='/seatselect' element={<SeatSelect />} />
        <Route path='/allbookings' element={<AllBookings />} />
        <Route path='/bookingsuccess' element={<BookingSuccess />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/book' element={<FutureBooking />} /> 
        
        {/* check /book */}

        {/* Conductor Pages */}
        <Route path = '/route' element = {<ConRouting />} />
        <Route path='/condashboard' element={<ConDashBoard />} />
        <Route path = '/overview' element = {<Overview />} />
        <Route path = '/quickscan' element = {<QuickScan />} />
        <Route path='/ticket' element={<Tickets />} />
        <Route path='/conTicketing' element={<ConductorTicketing />} />
        {/* <Route path='/scanTicket' element={<ScanningTicket />} /> */}

        {/* Bus Pages */}
        <Route path='/busDashboard' element={<BusDashboard />} />
        <Route path='/allBusses' element={<AllBusses />} />
        <Route path='/addConductor' element={<AddConductor />} />
        <Route path='/routeTimetable' element={<RouteTimetable />} />
        <Route path='/ownerbusdetails' element={<OwnerBusDetails />} />
        <Route path='/busOverview' element={<OwnerOview />} />
      </Routes>
    </div>
  );
}

export default App;
