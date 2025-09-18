import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products';

const PrdDetail = () => {
    const prod = useParams();

    const product = products.find(prd => prod.id == prd.id)
    
  return (
    <div className='p-20 flex ml-44'>
      <div className='w-[400px]'>
        <img className='w-[500px] mx-auto' src={product.thumbnail} alt="" />
        <h1 className='text-center font-bold'>{product.title}</h1>
      </div>
      <div className='w-[500px] pt-44'>
        <h1>Price: {product.price}$</h1>
        <h1>Discount: {product.discountPercentage}%</h1>
        <h1>Category: {product.category}</h1>
        <h1>{product.brand && `Made by ${product.brand}` }</h1>
        <h1>Description: {product.description}</h1>
      </div>
    </div>
  )
}

export default PrdDetail
