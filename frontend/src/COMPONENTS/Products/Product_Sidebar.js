import React from 'react'
import CategorySidebar from './CategorySidebar'
import AllProduct from './AllProduct'
import './Product_Sidebar.css'

function ProductSidebar() {
  return (
    <div className='product_sidebar'>
        <CategorySidebar />
        <AllProduct />
    </div>
  )
}

export default ProductSidebar