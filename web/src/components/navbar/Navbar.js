import React, { useContext } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from'../../assets/img/logo_civitatis.png'
import searchicon from'../../assets/img/searchicon.png'
import usericon from'../../assets/img/usericon.png'
import { AuthContext } from '../context/AuthStore'

const renderNavLinkClassName = ({ isActive} )=> isActive ? 'nav-link active' : 'nav-link'
import './navBar.css';

function Navbar() {
  const {user, logout} = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary menu">
    <div className="container-fluid">
    <NavLink to="#" className="navbar-brand"><img src={logo} className='logo' alt="civitatis"/></NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">

      <li className="nav-item dropdown">
          <NavLink to="/login"  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={usericon} className='usericon' alt="My account"/>
          </NavLink>
          <ul className="navbar-nav">
            {(user?.email)?(
              <>
              <li className="dropdown-item"><NavLink to = {`/users/${user.id}`} className={renderNavLinkClassName}>{user.email}</NavLink></li>
              <li className="dropdown-item"><button className ='nav-link' onClick={()=> logout()} >Logout</button></li>
              
              </>
            ) : (
              <>
                <li className="dropdown-item"> <NavLink to = "/register" className={renderNavLinkClassName}>Register</NavLink></li>
                <li className="dropdown-item"> <NavLink to = "/login" className={renderNavLinkClassName}>Login</NavLink></li>
              </>
            )}
            <li><NavLink to="#" className="dropdown-item" >Action</NavLink></li>
            <li><NavLink to="#" className="dropdown-item">Another action</NavLink></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  )
}

export default Navbar
