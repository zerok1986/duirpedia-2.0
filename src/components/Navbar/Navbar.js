import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/sw-logo.png'
import './Navbar.css'

function Navbar() {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Star Wars Logo" />
      </Link>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/films">Films</Link>
        </li>
        <li className="navbar-item">
          <Link to="/people">People</Link>
        </li>
        <li className="navbar-item">
          <Link to="/planets">Planets</Link>
        </li>
        <li className="navbar-item">
          <Link to="/species">Species</Link>
        </li>
        <li className="navbar-item">
          <Link to="/starships">Starships</Link>
        </li>
        <li className="navbar-item">
          <Link to="/vehicles">Vehicles</Link>
        </li>
        <li className="navbar-mobile">
          <button onClick={toggleMenu}>{menuActive ? 'Close' : 'Menu'}</button>
        </li>
      </ul>
      <div
        className={`navbar-mobile-menu ${menuActive ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <ul>
          <li>
            <Link to="/films">Films</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
          <li>
            <Link to="/starships">Starships</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
