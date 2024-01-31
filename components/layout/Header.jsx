import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand font-weight-bold">
          {props.title}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new" className="nav-link">
                <i className="fas fa-plus" /> Add Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

Header.defaultProps = {
  title: "My Contacts"
};

export default Header;
