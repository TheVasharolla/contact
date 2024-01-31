import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_FRAME":
      return {
        ...state,
        texts: state.texts.filter(text => {
          return text.id !== action.payload;
        })
      };

    case "ADD_FRAME":
      return {
        ...state,
        texts: [...state.texts, action.payload]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    texts: [
      {
        id: "1",
        text: "Enter Text Yo:"
      },
      {
        id: "2",
        text: "Please Enter Text 45:"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
