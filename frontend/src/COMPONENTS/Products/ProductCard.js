import React, { useState } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({data}) {
    const [show,setshow] = useState(false)
    const [count,setCount] = useState(1)

    const addtocart = () => {
        let cart= JSON.parse(localStorage.getItem('cart'))
        let productdata = data
        if(cart) {
          let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
          if(itemincart){
            cart = cart.map(item => {
              if(item.productdata.ProductId === productdata.ProductId){
                return {
                  ...item,
                  quantity: item.quantity + count
                }
              }
              else{
                return item
              }
            })
            localStorage.setItem('cart',JSON.stringify(cart))
          }
          else{
             cart = [
              ...cart,
              {
                productdata,
                quantity: count
              }
            ]
            localStorage.setItem('cart',JSON.stringify(cart))
          }
        }
        else {
          cart=[{
            productdata,
            quantity: count
          }]
          localStorage.setItem('cart',JSON.stringify(cart))
        }
        // const notify = () => toast('Item added to Cart')
        // setreloadnavbar(!reloadnavbar)
        window.location.reload()
      }

  return (
    <div className='product'>
        <div className='s1'>
            <img src={data.productimage} alt={'no img'} />
        </div>
        <div className='s2'>
            <h3>
                ${
                    data.productprice - (data.productprice * data.discountpercent /100 )
                }
                <span>${data.productprice}</span>
                <p>{data.productname}</p>
            </h3>
        </div>
        <div className='s3'>
            <p>{data.counttype}</p>
        </div>
        {
            show ? 
            <div className='addbtn'>
                <div className='qty'>
                    <button 
                    onClick={() => {
                        if(count>1){
                            setCount(count-1)
                        }
                    }}
                    >-</button>
                    <p>{count}</p>
                    <button onClick={() => setCount(count+1)}>+</button>    
                </div>
                <button className='addtocart'
                onClick={() =>{
                    setshow(false)
                    addtocart()
                }}>Add to Cart</button>
            </div>
            :
            <div className='addbtn'>
            <Link to={'/product/${data.id}'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" 
            onClick={() => setshow(true)} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        }
    </div>
  )
}

export default ProductCard