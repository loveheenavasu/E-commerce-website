import React from 'react'
import Addresses from './Addresses.tsx'
import Address from './Address.tsx'

const Addressparent = () => {
  return (
    <div style={{display:"flex"}}>
      <div><Address/></div>
      <div><Addresses/></div>
    </div>
  )
}

export default Addressparent;