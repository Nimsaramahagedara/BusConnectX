import React from 'react'
import { Link } from 'react-router-dom'

const PoweredBy = ({textCol, ...classes}) => (
    <>
     <p className='text-primary'>Powered By <Link to='https://envictasoftware.co.uk/' target='_blank'><b>Envicta</b></Link> <b>Software</b></p>
    </>
)


export default PoweredBy