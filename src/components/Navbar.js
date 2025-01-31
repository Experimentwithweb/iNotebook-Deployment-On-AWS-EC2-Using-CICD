// Purpose -create the Navigation bar on the UI.

import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate()

  const handleLogout= ()=>{
    localStorage.removeItem('token');
    navigate("/login");

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
{ !localStorage.getItem('token') ?
          <form className="d-flex" role="search">
            <Link className="btn btn-primary mx-1" to="/login" role="button">
              Login
            </Link>
            {/* Added button for login */}
            <Link className="btn btn-primary mx-1" to="/signup" role="button">
              Signup
            </Link>
            {/* Added button for signup */}
          </form> : <button onClick= {handleLogout} className="btn btn-primary mx-1" >
              Logout     {/* Added button for Logout */}
            </button>

} 
{/* Hiding Login and Signup when user loged in */}


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
