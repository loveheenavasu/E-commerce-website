import React from 'react'
import LeftSideBar from './LeftSideBar.tsx'
import RightSideBar from './RightSideBar.tsx'
import "./cart.css";

const Cart = () => {
  return (
    <div className='Cart'>
    <LeftSideBar/>
    <RightSideBar/>
    </div>
  )
}

export default Cart