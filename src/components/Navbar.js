import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
      <h1>
        <Link to="/"><i></i> Hexaccolades</Link>
      </h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddAchievement">Add Achievement</Link></li>
      </ul>
    </nav>   
    )
}

export default Navbar;