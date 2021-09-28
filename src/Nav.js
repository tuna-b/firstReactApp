import react from "react";
import './App.css';
import './App';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const navStyle = {
        color:'white'
    };
    return(
      <nav>

          <ul className="nav-links">
              <Link style={navStyle} to="/Home">
              <li>
                  Home
              </li>
              </Link>
              <Link style={navStyle} to="/About">
              <li>
                  About
              </li>
              </Link>
              <Link style={navStyle} to="/Shop">
              <li>
                  Shop
              </li>
              </Link>
          </ul>
      </nav>
    );
}
export default Navbar;