import React from "react";
import PropTypes from "prop-types";

export default function Navbar(Props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {Props.title}
          </a>
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
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {Props.aboutText}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-switch text-${Props.mode === 'dark'? 'light' : 'dark'} me-auto mb-2 mb-lg-0`}>
              <input
                className="form-check-input"
                onClick={Props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">
                Enable darkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };
Navbar.defaultProps = { title: "Set Title Here", aboutText: "About Page" };
