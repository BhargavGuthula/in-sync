import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">In-Sync</h2>
      <input type="text" placeholder="Search music" className="search-bar" />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Library</a></li>
        <li><a href="#">Playlists</a></li>
        <li><a href="#">Artists</a></li>
      </ul>
    </nav>
  )
}
