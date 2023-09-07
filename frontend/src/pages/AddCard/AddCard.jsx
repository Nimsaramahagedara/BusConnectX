import React, { useState } from 'react'
import TopNavBar from '../../components/TopNavBar'
import { Button, RadioGroup, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SavedCard from '../../components/SavedCard';





const AddCard = () => {
  const [expiration, setExpiration] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;

    // Remove non-numeric characters
    const cleanInput = input.replace(/[^\d]/g, '');

    // Format MM/YY
    const formattedInput = cleanInput.replace(
      /^(\d\d)(\d\d?)?$/,
      (_, month, year) => `${month}${year ? '/' + year : ''}`
    );

    setExpiration(formattedInput);
  };

  

  const handleChangeCVV = (event) => {
    const inputValue = event.target.value;

    // Ensure the input is within the desired range
    if (inputValue === '' || (Number(inputValue) >= 0 && Number(inputValue) <= 999)) {
      setNumberValue(inputValue);
    }
  };
  return (
    <div>
        <TopNavBar header='Add new Card'/>
        <div className="container-lg mt-5 text-center">
          <div className="mt-5 p-3"></div>
          <form action="">
            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <TextField fullWidth id="outlined-basic" label="Name on Card" variant="outlined" />
            </FormControl>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Card Number</InputLabel>
            <OutlinedInput
              fullWidth
              id="outlined-adornment-password"
              type='number'
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <CreditCardIcon/>
                  </IconButton>
                </InputAdornment>
              }
              label="Card Number"
            />
          </FormControl >
          <FormControl sx={{ m: 1, width: '100%', flexDirection:'row',gap:'10px' }} variant="outlined">
          <TextField
            label="MM/YY"
            placeholder="MM/YY"
            value={expiration}
            onChange={handleChange}
            style={{width:'50%'}}
            inputProps={{
              maxLength: 5, // Limit input length to "MM/YY"
              pattern: '(0[1-9]|1[0-2])\\/\\d{2}', // MM/YY pattern
            }}
          />
          <TextField 
            type='number' 
            label="CVV" 
            value={numberValue}
            onChange={handleChangeCVV}
            style={{width:'50%'}}
            inputProps={{
              min: 0,
              max: 999
            }}
            />
          </FormControl>
          </form>
          
      
        <Button variant='contained' size='large' className='bg-primary mt-3' >Add Card</Button> 
        </div>
        <div className="container-lg">
          <h6>Saved Card</h6>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <SavedCard value='card1'/>
            <SavedCard value= 'card2'/>
          </RadioGroup>
        </div>
    </div>
  )
}

export default AddCard