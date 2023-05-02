import React, { useContext } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from'../../assets/img/logo_civitatis.png'
import searchicon from'../../assets/img/searchicon.png'
import usericon from'../../assets/img/usericon.png'
import { AuthContext } from '../context/AuthStore'
import './navBar.css';

const renderNavLinkClassName = ({ isActive} )=> isActive ? 'nav-link active' : 'nav-link'

function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link to="/" className="navbar-brand"><img src={logo} className='logo' alt="civitatis"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={usericon} className='usericon' alt="My account"/>
              </a>
              {(user?.email) ? (
                <ul className="dropdown-menu">
                  <li><Link to = {`/users/${user.id}`} className="dropdown-item">{user.email}</Link></li>
                  <li><button className="dropdown-item" onClick={() => logout()} >Logout</button></li>
                </ul>
              ) : (
                <ul className="dropdown-menu">
                  <li><Link to="/register" className="dropdown-item">Register</Link></li>
                  <li><Link to="/login" className="dropdown-item">Login</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar


