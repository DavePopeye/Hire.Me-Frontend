import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/NavbarStyle.css";
import hireW from "../../images/hireW.png";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="barStyle shadow">
          <Navbar.Brand className="fontStyle" href="/">
            Welcome in Hire.Me
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
