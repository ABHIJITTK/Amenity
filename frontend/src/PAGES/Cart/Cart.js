import React, { useState } from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer from '../../COMPONENTS/Footer/Footer'

const Cart =() => {
    const [cartdata,setcartdata] = React.useState([])
    const [subtotal, setsubtotal] = React.useState(0)
    const getcartitemfromlocalstorage = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if(cart) {
            setcartdata(cart)
            let tempsubtotal = 0
            cart.forEach(item => {
                tempsubtotal += item.productprice * item.quantity
            })
            setreloadnavbar(!reloadnavbar)
        }
        else {
            console.log("Cart is Empty")
            setreloadnavbar(!reloadnavbar)
        }
    }

    React.useEffect (() => {
        getcartitemfromlocalstorage()
    },[])

    const checkLogin = () => {
        return true
    }
    const [reloadnavbar,setreloadnavbar] = React.useState(false)
    return (
    <div>
        <Navbar reloadnavbar={reloadnavbar}/>
        <div className='cart'>
            <div className='progress'></div>
        </div>
        <Footer />
        </div>
  )
}

export default Cart