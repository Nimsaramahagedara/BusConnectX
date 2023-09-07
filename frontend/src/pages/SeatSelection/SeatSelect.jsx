import React from 'react'
import TopNavBar from '../../components/TopNavBar'
import Seat from '../../components/Seat'
import { Button } from '@mui/material'
import { GenerateRow } from '../../components/Seat'


const SeatSelect = () => {
    const boxCount = 60;
    const rowCont = 14;

    const genAllSeats = (numRows) => {
        const rows = [];

        for (let i = 1; i <= numRows * 4; i += 4) {
            if (i + 5 >= numRows * 4) {
                rows.push(<GenerateRow key={i} row={i} longSeat={true} />);
            } else {
                rows.push(<GenerateRow key={i} row={i} />);
            }

        }

        return rows;
    };
    /*const boxes = Array.from({ length: boxCount }, (_, index) => (
        <Seat key={index} number={index + 1} />
      ));*/

    /*const genAllSeats = Array.from({ length: rowCount }, (_, index) => (
        boxes
      ));*/
    return (
        <div>
            <TopNavBar header={'Select Seat'} />
            <div className="mt-5"></div>
            <div className='shadow-sm p-3 mt-5 mw-50'>
                {genAllSeats(rowCont) /*<Check rowCount={10} seatsPerRow={4}/>*/}
            </div>
            <div className="p-5">
                <div className="colors d-flex justify-content-around my-3">
                    <h6 className='position-relative'><span className='small-circle1'></span>Selected</h6>
                    <h6 className='position-relative'><span className='small-circle2'></span>Available</h6>
                    <h6 className='position-relative'><span className='small-circle3'></span>Booked</h6>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <Button variant='contained' size='large' className='bg-primary'>Select</Button>
                    <Button variant='outlined' size='large'>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default SeatSelect