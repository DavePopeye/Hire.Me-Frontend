import React, { Component } from "react";
import { Jumbotron, Container, Row } from "react-bootstrap";
import "../../styles/JumboStyle.css";
import hireTcropped from "../../images/hireTcropped.png";

export default class AboutJumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid className="mainJumboStyle shadow">
          <Container>
            <Row className="firstRow">
              <h1>Welcome in:</h1>
            </Row>
            <Row>
              <img src={hireTcropped} className="secondRow" />
            </Row>
            <Row className="thirdRow my-1 justify-content-end">
              <p>the fastest portal for find your ideal web developer</p>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
