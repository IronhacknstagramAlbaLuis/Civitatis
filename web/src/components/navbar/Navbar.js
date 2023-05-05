import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from'../../assets/img/logo_civitatis.png'
import usericon from'../../assets/img/usericon.png'
import { AuthContext } from '../context/AuthStore'
import './navBar.css';

const renderNavLinkClassName = ({ isActive} )=> isActive ? 'nav-link active' : 'nav-link'

function Navbar() {
  const { user, logout } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/" className="navbar-brand"><img src={logo} className='logo' alt="civitatis"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={usericon} className='usericon' alt="My account"/>
              </a>
              {(user?.email) ? (
                <ul className="dropdown-menu">
                  <li><Link to = {`/users/${user.id}`} className="dropdown-item">{user.email}</Link></li>
                  <li><button className="dropdown-item" onClick={() => logout()} >Cerrar sesiónb</button></li>
                </ul>
              ) : (
                <ul className="dropdown-menu">
                  <li><Link to="/register" className="dropdown-item">Regístrate</Link></li>
                  <li><Link to="/login" className="dropdown-item">Mi cuenta</Link></li>
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


