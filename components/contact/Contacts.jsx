import React, { Component } from "react";

import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-3 text-center text-white bg-dark">
                Contacts List
              </h1>
              {contacts.length
                ? contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                  ))
                : "No contacts!"}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
