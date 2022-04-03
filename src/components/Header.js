import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-light p-0">
        <div className="container-fluid p-0 expanded">
          <Link to="/" className="icon-home hide-text">
            <i className="logo" alt="logo"></i>Home
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === '/' ? 'active' : ''
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/vehicle"
                  className={`nav-link ${
                    location.pathname === '/vehicle' ? 'active' : ''
                  }`}
                  aria-current="page"
                >
                  Vehicle Type
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/history"
                  className={`nav-link ${
                    location.pathname === '/history' ? 'active' : ''
                  }`}
                  aria-current="page"
                >
                  History
                </Link>
              </li>
              <hr className="line-nav" />
              {true ? (
                <div className="button-login-register">
                  <Link to="/login">
                    <button className="btn btn-outline-warning">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-warning">Register</button>
                  </Link>
                </div>
              ) : (
                <div className="button-email-profile">
                  <Link to="/chat" className="hide-text">
                    <i className="icon-email email"></i>Email
                  </Link>
                  <div className="dropdown">
                    <img
                      // src={
                      //   photo
                      //     ? `${process.env.REACT_APP_HOST}/${photo}`
                      //     : require('../assets/images/default.jpg')
                      // }
                      className="icon-profile dropbtn"
                      alt="profile"
                      onClick={() => {
                        document
                          .getElementById('myDropdown')
                          .classList.toggle('show');
                      }}
                    />
                    <div id="myDropdown" className="dropdown-list">
                      <Link to="/profile">My Profile</Link>
                      <div className="logout">Logout</div>
                    </div>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
