import React, { Component } from "react";
import AboutJumbo from "../About/AboutJumbo";
import AlgoliaFeature from "../AlgoliaFeature/AlgoliaFeat";
import { Container, Col, Row } from "react-bootstrap";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <AboutJumbo />
        <Row className="m-0">
          <AlgoliaFeature />
        </Row>
      </div>
    );
  }
}
