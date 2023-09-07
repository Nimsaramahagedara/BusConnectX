import React, {useState} from 'react'

const Tickets = () => {

    const [date, setDate] = useState(new Date())
    const year = date.getDate()

    return (
        <div className="ticketContainer p-3 text-center d-flex flex-column gap-15 align-items-center">
            <div className="ticketContents">
                <h6>Envictra Travels</h6>
                <p>Thangalle - Colombo</p>
            </div>

            <div className="ticketContents d-flex justify-content-around gap-5">
                <div>
                    <h6>From</h6>
                    <span>Matara</span>
                </div>
                <div>
                    <h6>To</h6>
                    <span>Colombo</span>
                </div>
            </div>

            <div className="ticketContents d-flex just-content-around gap-4">
                <div>
                    <h6>Cost</h6>
                    <span>600</span>
                </div>

                <div>
                    <h6>No.of Tickets</h6>
                    <span>3</span>
                </div>

                <div>
                    <h6>Discount</h6>
                    <span>10%</span>
                </div>

                <div>
                    <h6>Total</h6>
                    <span>1620</span>
                </div>
            </div>
            
            <div className="ticketContents d-flex flex-column gap-1 mt-2">
                <span>{date.toLocaleDateString()}</span>
                <span>Thank You. Come Again!</span>
            </div>
        </div>
    )
}

export default Tickets