import React, { Component } from "react";
import { Consumer } from "../newContext";

import uuid from "uuid";

export default class AddFrame extends Component {
  state = {
    bodyText: "",
    error: null
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (dispatch, e) => {
    e.preventDefault();
    const { bodyText } = this.state;

    if (bodyText === "") {
      this.setState({ error: "Fill out the field!" });
      return;
    }

    const newFrame = {
      id: uuid(),
      text: this.state.bodyText
    };
    dispatch({ type: "ADD_FRAME", payload: newFrame });
    this.setState({ bodyText: "" });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <div className="card">
                <div className="card-title">
                  Add New Frame
                  <div className="card-body">
                    <form>
                      <div className="form-group lead">
                        <label htmlFor="bodyText">Text:</label>
                        <input
                          type="text"
                          name="bodyText"
                          className="form-control"
                          placeholder="Enter Text..."
                          value={this.state.bodyText}
                          onChange={this.onChange}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Submit"
                        onClick={this.submitHandler.bind(this, dispatch)}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
