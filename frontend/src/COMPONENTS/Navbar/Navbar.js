import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../ASSETS/clg logo.png'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

function Navbar({reloadnavbar}) {
  const [cartquantity, setcartquantity] = useState(0)

  const getcarttotal = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart) {
      let total=0
      cart.forEach(item => {
        total+=item.quantity
      })
      setcartquantity(total)
    }
    else {
      setcartquantity(0)
    }
  }

  useEffect(() => {getcarttotal()}, [reloadnavbar])
    return (
    <nav>
        <div className='s1'>
            <div className='brand'>
            <img src={logo} alt='logo' className='logo' />
            <h1>Amenity</h1>
            </div>

            <div className='searchbar'>
                <input type='text' placeholder='Search food' className='search' />
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
                </button>
            </div>
            <div className='right'>
                <div className='cart'>

                <span className='qty'>{cartquantity}</span>
                  <Link to='/cart' className='stylenone'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
                  </Link>

                </div>
                <Dropdown>
                  <Dropdown.Toggle variant='' id='dropdown-basic'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='/login'>Login</Dropdown.Item>
                  <Dropdown.Item href='/signup'>Signup</Dropdown.Item>
                  <Dropdown.Item href='#'>Profile</Dropdown.Item>
                  <Dropdown.Item href='#'>Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='s2'>
          <Link to='/'>Home</Link>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/vegetarian">Vegetarian</Dropdown.Item>
        <Dropdown.Item href="/nonvegetarian">Non-Vegetarian</Dropdown.Item>
        <Dropdown.Item href="/fruits">Fruits</Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown>
            <Link to='/juice'><a>Juice</a></Link>
            <Link to='/snack'><a>Snack</a></Link>
            <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/about">About Us</Dropdown.Item>
        <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
        <Dropdown.Item href="/faq">FAQ</Dropdown.Item>
      </Dropdown.Menu>
            </Dropdown>
        </div>
    </nav>
  )
}

export default Navbar