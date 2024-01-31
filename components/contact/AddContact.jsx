import React, { Component } from "react";

import axios from "axios";

import { Consumer } from "../../context";
import FormInputField from "../layout/FormInputField";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Alliance is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: response.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { errors } = this.state;

          return (
            <div className="card mb-3">
              <div className="card-header bg-dark text-light">Add Info</div>
              <div className="card-body bg-light text-dark">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <FormInputField
                    label="Name"
                    name="name"
                    type="text"
                    onChange={this.onChange}
                    value={name}
                    placeholder="Enter name..."
                    error={errors.name}
                  />
                  <FormInputField
                    label="Email"
                    name="email"
                    type="text"
                    onChange={this.onChange}
                    value={email}
                    placeholder="Enter email..."
                    error={errors.email}
                  />
                  <FormInputField
                    label="Phone"
                    name="phone"
                    type="text"
                    onChange={this.onChange}
                    value={phone}
                    placeholder="Enter phone..."
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
