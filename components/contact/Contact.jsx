import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import axios from "axios";

import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showInfo: false
  };

  handleOnClick = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  handleDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showInfo } = this.state;
    /*To pass params this.handleOnClick.bind(this, name) */
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.handleOnClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <Link to={`edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      float: "right",
                      cursor: "pointer",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.handleDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <b>Email:</b> {email}
                  </li>
                  <li className="list-group-item">
                    <b>Phone:</b> {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

Contact.defaultProps = {
  contact: { id: null, name: "-", email: "-", phone: "-" }
};
export default Contact;
