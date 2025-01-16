import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();
  
  // Check if there's a logged-in user in localStorage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    // Remove logged-in user from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    navigate("/login");
  };


  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav--list">
          <div className="item">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
          </div>
          <div className="item">
            <NavLink to="/favourites" activeClassName="active">Favourites</NavLink>
          </div>
          <div className="item">
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </div>
          <div className="item">
            <NavLink to="/login" activeClassName="active">Login</NavLink>
          </div>
          {/* Show Logout button only if the user is logged in */}
        {loggedInUser && (
          <div className="item">
            <img src="/assets/images.jpg" alt='qocala babuda'/>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        </div>
      </nav>
    </div>
  )
}

export default NavBar