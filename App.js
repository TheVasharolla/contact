import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contact/Contacts";
import AddContact from "./components/contact/AddContact";
import EditContact from "./components/contact/EditContact";

import Header from "./components/layout/Header";

import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";

import { Provider } from "./context";

// import MyFrames from "./components/MyFrames";
// import { Provider } from "./newContext";
// import AddFrame from "./components/AddFrame";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
  render() {
    return (
      // <Provider>
      //   <div className="container">
      //     <MyFrames />
      //     <AddFrame />
      //   </div>
      // </Provider>
      <Provider>
        <Router>
          <div className="App">
            <Header />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/new" component={AddContact} />
                <Route exact path="/edit/:id" component={EditContact} />
                <Route exact path="/about/" component={About} />
                <Route component={Error404} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
