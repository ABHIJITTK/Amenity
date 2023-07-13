import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard'
import './ProductSlider.css'

function ProductSlider({products, categoryname}) {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
    };
    return (
    <div className='productsliderout'>
        <h1>{categoryname}</h1>

        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} swipeable={true} draggable={true}>
            {products.map((item) => {
                return (
                    <ProductCard data={item} key={item.id} />
                )
            })}
        </Carousel>
    </div>
    
  )
}

export default ProductSlider