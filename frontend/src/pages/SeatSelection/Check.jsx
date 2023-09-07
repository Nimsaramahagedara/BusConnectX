import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../components/seat.css'
import { SeatPicker } from "../SeatPicker/SeatPicker";
// import Final from "./Final";
const Check= () => {
  const [selected, setSelected] = useState([]);
  const rows = [
    [
      { id: 1, number: "A1" },
      { id: 2, number: "A2" },
      null,
      { id: 5, number: "A8" },
      { id: 6, number: "A9" },
      { id: 7, number: "A10", visible:false},
    ],
    [
      { id: 11, number: "B1" },
      { id: 12, number: "B2" },
      null,
      { id: 15, number: "B9" },
      { id: 16, number: "B10" },
      { id: 17, number: "B11" }
    ],
    [
      { id: 21, number: "C1" },
      { id: 22, number: "C2" },
      null,
      { id: 25, number: "C9" },
      { id: 26, number: "C10" },
      { id: 27, number: "C11", isReserved: true },
      null
    ],
    [
      { id: 11, number: "D1" },
      { id: 12, number: "D2" },
      null,
      { id: 15, number: "D9" },
      { id: 16, number: "D10" },
      { id: 17, number: "D11" }
    ],
    [
      { id: 11, number: "E1" },
      { id: 12, number: "E2" },
      null,
      { id: 15, number: "E9" },
      { id: 16, number: "E10" },
      { id: 17, number: "E11" }
    ],
    [
      { id: 11, number: "F1" },
      { id: 12, number: "F2" },
      null,
      { id: 15, number: "F9" },
      { id: 16, number: "F10" },
      { id: 17, number: "F11" },
    ],
    [
      { id: 11, number: "G1" },
      { id: 12, number: "G2" },
      null,
      { id: 15, number: "G9" },
      { id: 16, number: "G10" },
      { id: 17, number: "G11" }
    ]
  ];
  const addSeatCallback = ({ row, number, id }, addCb) => {
    setSelected((prevItems) => [...prevItems, number]);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setSelected((list) => list.filter((item) => item !== number));
    removeCb(row, number);
  };

  return (
    <div className="seats">
     
      <SeatPicker
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        rows={rows}
        alpha
        maxReservableSeats={10}
        visible
      />
    </div>
  );
}

export default Check;
