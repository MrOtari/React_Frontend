import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default NavBar