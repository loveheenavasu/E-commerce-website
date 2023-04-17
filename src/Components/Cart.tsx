import React from 'react'
import LeftSideBar from './LeftSideBar.tsx'
import RightSideBar from './RightSideBar.tsx'

const Cart = () => {
  return (
    <div className='Cart' style={{display:"flex"}}>
    <LeftSideBar/>
    <RightSideBar/>
    </div>
  )
}

export default Cart