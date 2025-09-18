  import React from 'react'
  import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
  // NavLink
 
 const Card = ({prd}) => {

  const cart = () => {
    alert(`item has been added to the cart`)
  }

  const {title, thumbnail, price, stock, rating, category, brand, id} = prd
   return (
    <div className='p-2  bg-slate-200 rounded-lg shadow-lg'>
       <img className='object-cover object-center' src={thumbnail} alt="" />
       <h1 className='text-center font-bold mb-4'>{title}</h1>

       <div className='flex justify-between p-2'>
        <h1 className='text-green-500'>{brand}</h1>
        <h1 className='text-rose-500'>{category}</h1>
       </div>

       <div className='flex justify-between p-2'>
         <h1>{price}$</h1>
         <h1>{stock}</h1>
       </div>

       <div className='flex justify-between p-1'>
        <NavLink to={`/products/${id}`} className='bg-rose-700 p-2 rounded-md text-white'>View Details</NavLink>

        <IoCartOutline onClick={cart} className='text-4xl text-green-900 cursor-pointer'/>
       </div>
       ;
     </div>
   )
 }
 
 export default Card
 
 