import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from'../../assets/img/logo_civitatis.png'
import searchicon from'../../assets/img/searchicon.png'
import usericon from'../../assets/img/usericon.png'

// const renderNavLinkClassName = ({ isActive} )=> isActive ? 'nav-linl active' : 'nav-link'

import './navBar.css';

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary menu">
    <div className="container-fluid">
    <Link to="#" className="navbar-brand"><img src={logo} className='logo' alt="civitatis"/></Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <Link to="#"  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={usericon} className='usericon' alt="My account"/>
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="#" className="dropdown-item" >Action</Link></li>
            <li><Link to="#" className="dropdown-item">Another action</Link></li>
            <li><Link to="#" className="dropdown-item">Log out</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  )
}

export default Navbar
