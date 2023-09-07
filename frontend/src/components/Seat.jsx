import React, { useState } from 'react'
import './seat.css'

export const GenerateRow = (props) => {
  const { row } = props;
  const {longSeat} = props;

  console.log(row)
  

  const Arr = [];

  if(longSeat){
    Arr.push(
      <div className='row justify-content-center'>
      <Seat number={row} />
      <Seat number={row + 1} />
      <Seat number={row + 2} />
      <Seat number={row + 3} />
      <Seat number={row + 4} />
      <Seat number={row + 5} />
    </div>
    )
  }else{
    Arr.push(
      <div className='row justify-content-center'>
      <Seat number={row} />
      <Seat number={row + 1} />
      <Seat className='custom-hidden' />
      <Seat className='custom-hidden' />
      <Seat number={row + 2} />
      <Seat number={row + 3} />
    </div>
    )

  }
  return (
    Arr
  );
};

const Seat = (props) => {
 const {number} = props;
 const {className} = props;
 const [selectedSeat, setSelectedSeat] = useState(false);

  const seatHandler = (id)=>{
    setSelectedSeat((prevSelectedSeat) => !prevSelectedSeat);
    //setSelectedSeat({number:true})
    console.log(selectedSeat)
  }

  return (
    <div className={selectedSeat?'active-seat bg-info p-1 text-center seat-box':`bg-info p-1 text-center seat-box ${className} border border-white`} onClick={seatHandler}>
            {number}
    </div>
  )
}


export default Seat