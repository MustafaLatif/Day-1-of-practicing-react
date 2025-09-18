import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-teal-500 text-white p-2'>
      <ul className='flex justify-evenly text-2xl'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About US</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
        <NavLink to='menu'>Menu</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
