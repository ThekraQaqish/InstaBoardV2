import './Navbar.css';
import {NavLink} from 'react-router-dom'; 
export default function Navbar({ darkMode, toggleDarkMode }){
    return(
    <nav className={`$ a {darkMode ? 'dark' : 'light'}`}>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      <NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>Team  </NavLink>
      <NavLink to="/liked-users" className={({ isActive }) => isActive ? "active" : ""}>Liked Users  </NavLink>
    </nav>
    )
}