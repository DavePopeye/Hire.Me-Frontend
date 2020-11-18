import React, { Component } from "react";
import StudentsCard from "../StudentsCard/StudentsCard";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  connectHits,
  CurrentRefinements,
  Stats,
  ClearRefinements,
} from "react-instantsearch-dom";
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/algolia.css";
import { Container, Col, Row } from "react-bootstrap";
import "../../styles/AlgoliaStyle.css";

const searchClient = algoliasearch(
  "BB50MYVX5R",
  "a5c49b12f0621bb5fb16b7101b855a0c"
);
const CardHits = ({ hits }) => {
  return <StudentsCard hits={hits} />;
};
const CustomHits = connectHits(CardHits);

export default class AlgoliaFeature extends Component {
  render() {
    return (
      <Container>
        <InstantSearch searchClient={searchClient} indexName="users_NAME">
          <SearchBox
            className="instantStyle"
            translations={{ placeholder: "Search a candidate" }}
          />
          <Row>
            <CurrentRefinements />
          </Row>
          <Row className="my-2 ml-1">
            <ClearRefinements />
          </Row>
          <Stats />
          <Row>
            <Col className="col-2">
              <RefinementList attribute="skills" showMore="true" />
            </Col>
            <Col>
              <h4 className="candidateStyle">Our candidates:</h4>
              <CustomHits
                clearsQuery={true}
                transformItems={(items) =>
                  items.filter((item) => item.attribute !== "skills")
                }
              />
            </Col>
          </Row>
        </InstantSearch>
      </Container>
    );
  }
}
