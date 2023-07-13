import React from 'react'
import './AllProduct.css'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/f2.svg'
import img2 from '../../ASSETS/f3.svg'
import img3 from '../../ASSETS/f4.svg'
import img4 from '../../ASSETS/f5.svg'
import img5 from '../../ASSETS/f6.svg'

function AllProduct() {
  const products = [
    {
      id: 1,
      productimage: img1,
      productname: 'strawberry',
      productprice: 100,
      counttype: '1 per kg',
      discountpercent: 10
    },
    {
      id: 2,
      productimage: img2,
      productname: 'orange',
      productprice: 200,
      counttype: '1 per kg',
      discountpercent: 12
    },
    {
      id: 3,
      productimage: img3,
      productname: 'papaya',
      productprice: 150,
      counttype: '1 per kg',
      discountpercent: 8
    },
    {
      id: 4,
      productimage: img4,
      productname: 'Guava',
      productprice: 70,
      counttype: '1 per kg',
      discountpercent: 5
    },
    {
      id: 5,
      productimage: img5,
      productname: 'grapes',
      productprice: 300,
      counttype: '1 per kg',
      discountpercent: 20
    },
    {
      id: 6,
      productimage: img1,
      productname: 'strawberry',
      productprice: 170,
      counttype: '1 per kg',
      discountpercent: 15
    },
    {
      id: 7,
      productimage: img2,
      productname: 'orange',
      productprice: 180,
      counttype: '1 per kg',
      discountpercent: 12
    },
    {
      id: 8,
      productimage: img3,
      productname: 'papaya',
      productprice: 150,
      counttype: '1 per kg',
      discountpercent: 19
    },
    // {
    //   id: 9,
    //   productimage: img4,
    //   productname: 'Guava',
    //   productprice: 140,
    //   counttype: '1 per kg',
    //   discountpercent: 13
    // },
    // {
    //   id: 10,
    //   productimage: img5,
    //   productname: 'Grapes',
    //   productprice: 120,
    //   counttype: '1 per kg',
    //   discountpercent: 30
    // }
  ]
  return (
    <div className='allproducts'>
      <h1>All Products</h1>
      <div className='products'>
        {
          products.map((item) => {
            return (
              <ProductCard data={item} key={item.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProduct