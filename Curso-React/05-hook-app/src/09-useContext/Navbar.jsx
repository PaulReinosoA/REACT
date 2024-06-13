import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <Link className="navbar-brand text-center" to="/">
        useContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </>
);
