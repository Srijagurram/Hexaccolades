import React from 'react'
import logo from '../../assests/hexlogo.png'
import Navbar from "react-bootstrap/Navbar";

const HexagonBranding = () => {
    return (
    <div className='text-center'>
        <img
          alt="Hexagon Logo"
          src={logo}
          width="74"
          height="74"
          className='img-fluid'
        />
     </div>
    )
}

export default HexagonBranding;
