import React from 'react'
import "../Category/ItemCategory.css";
import CardCarousel from './CardCarousel';
// import Tester from './Tester';
const ItemCategory = () => {
  return (
    <div className='container mt-5'>
        <div className='d-flex justify-content-between'>
            <h3 className='text-dark fw-bold'>Featured Categories</h3>
            <div className='btn-chevron'>
                <button><i class="bi bi-chevron-left"></i></button>
                <button><i class="bi bi-chevron-right"></i></button>
            </div>
        </div>
        <CardCarousel />
    </div>
  )
}

export default ItemCategory