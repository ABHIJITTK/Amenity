import React from 'react'
import logo from '../../ASSETS/amenity2.png'
import './Footer.css'

function footer() {
  return (
    <div className='footer'>
        <div className='imagecont'>
            <img src={logo} alt='logo' className='logo' />
            <div className='content'>
                <h1>Contact Us</h1>
                <p>for Queries & help</p>
                <button>Help</button>
            </div>
        </div>
    </div>
  )
}

export default footer