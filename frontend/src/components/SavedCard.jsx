import { FormControlLabel, Radio } from '@mui/material'
import React from 'react'
import visaIcon from '../images/visa.png';

const SavedCard = ({value}) => {
  return (
    <div className='d-flex align-items-center justify-content-between shadow-sm p-3'>
        <div className='d-flex'>
            <FormControlLabel value={value} control={<Radio />} label={''}/>
            <div style={{width:'50px'}}>
                <img src={visaIcon} alt="VISA" className='w-100' />
            </div>
        </div>
        <div>
            <strong>0000 0000 0000 0000</strong>
            <h6>VISA CARD</h6>
        </div>
    </div>
  )
}

export default SavedCard