import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '/public/Logo.png'
export default function Navbar() {
  return (
    <nav className="navbar">
      <figure className="logo-container">
        <img src={Logo} alt="In-Sync" className="navbar-logo" />
        <figcaption className="navbar-logo-caption">Insync</figcaption>      
      </figure>
      <input type="text" placeholder="Search music" className="search-bar" />
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/library">Library</NavLink></li>
        <li><NavLink to="/playlists">Playlists</NavLink></li>
        <li><NavLink to="/artists">Artists</NavLink></li>
      </ul>
    </nav>
  )
}

