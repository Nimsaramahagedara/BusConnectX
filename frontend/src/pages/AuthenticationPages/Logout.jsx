import { Button } from '@mui/material'
import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const Logout = () => {
  const navigate = useNavigate();

  const handleLogOut = ()=>{
    Cookies.remove('user');
    navigate('/login')
  }
  return (
    <Button onClick={handleLogOut} variant='contained' color='primary' >Log out</Button>
  )
}

export default Logout