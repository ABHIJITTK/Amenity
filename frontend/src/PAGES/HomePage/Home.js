import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Banner from '../../COMPONENTS/Banners/BannerSlider'
import ProductSidebar from '../../COMPONENTS/Products/Product_Sidebar'
import Footer from '../../COMPONENTS/Footer/Footer'
import ProductSlider from '../../COMPONENTS/Products/ProductSlider'
import img1 from '../../ASSETS/img 2.svg'
import img2 from '../../ASSETS/img 6.svg'
import img3 from '../../ASSETS/img 4.svg'
import img4 from '../../ASSETS/f5.svg'
import img5 from '../../ASSETS/f6.svg'

function Home() {
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
    <div>
        <Navbar/>
        <Banner />
        <ProductSidebar />
        <div className='slidercont'>
        <ProductSlider products={products} categoryname='Related Products'/>
      </div>
      <div className='slidercont'>
        <ProductSlider products={products} categoryname='More Products'/>
      </div>
        <Footer />
      </div>
  )
}

export default Home