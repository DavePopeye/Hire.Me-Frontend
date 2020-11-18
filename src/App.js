import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

import StudentSignup from "./components/StudentSignup/StudentSignup";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import HirerSignup from "./components/HirerSignup/HirerSignup";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/signup$student" exact component={StudentSignup} />
          <Route path="/signup$hirer" exact component={HirerSignup} />
          <Route path="/homepage" exact component={Homepage} />
        </Router>
      </>
    );
  }
}

export default App;
