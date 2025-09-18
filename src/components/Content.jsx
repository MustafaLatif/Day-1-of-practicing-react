import React from 'react'
import products from '../products'
import Card from './Card'

const Content = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 m-4'>
      {
        products.map((product) => (
          <Card prd = {product} />
        ))
      }
    </div>
  )
}

export default Content
