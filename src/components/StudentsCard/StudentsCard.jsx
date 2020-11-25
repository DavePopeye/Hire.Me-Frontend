import React, { Component } from "react";
import { Card, Button, Col, Row, Image, Badge } from "react-bootstrap";
import StudentModal from "../StudentModal/StudentModal";
import portrait from "../../images/portrait.png";

import "../../styles/StudentsCard.css";

export default class StudentsCard extends Component {
  state = {
    showModal: false,
    modalUser: {},
    // users: [],
    // name: "",
    // surname: "",
    // email: "",
    // country: "",
    // age: "",
    // role: "",
    // bio: "",
    // area: "",
    // linkedinProfile: "",
    // githubProfile: "",
    // skills: [],
    // _id: "",
  };

  openModal = (student) => {
    console.log(student);
    this.setState({
      modalUser: student,
      showModal: true,
    });
  };

  componentDidMount = async () => {
    let response = await fetch(
      "https://hire-dot-me-backend.herokuapp.com/students?limit=9&role=user"
    );
    console.log("cuzzocazzo" + this.props.hits);
    let parsedJson = await response.json();
    // let user = parsedJson[0];
    console.log(parsedJson);
    this.setState({ users: parsedJson });
  };

  render() {
    return (
      <>
        {/* <Row className="justify-content-center">
          <h1 className="m-5">Our candidates:</h1>
        </Row> */}
        <Row className="justify-content-center">
          {
            //this.state.users.length > 0 &&
            //this.state.users
            //.filter((person) => person.role === "M")
            this.props.hits.length > 0 &&
              this.props.hits.map((user) => {
                return (
                  <>
                    <Col className="col-10 col-md-10">
                      <Card className="shadow cardStyle fluid my-4">
                        <Row>
                          <Col className="col-5">
                            <Image
                              src={user.image || portrait}
                              className="picStyle"
                            />
                          </Col>
                          <Col>
                            <Card.Body className="cardBodyStyle col-9">
                              <Card.Title>
                                {user.name} {user.surname}
                              </Card.Title>
                              <Card.Text className="cardTextStyle">
                                <p>{user.country}</p>
                                {user.skills.map((skill) => (
                                  <Badge className="m-1 labelStyle">
                                    {skill}
                                  </Badge>
                                ))}
                              </Card.Text>
                              <Row className=" justify-content-end mr-1">
                                <Button
                                  onClick={() => this.openModal(user)}
                                  // this.setState({
                                  //   showModal: true,
                                  //   name: user.name,
                                  //   surname: user.surname,
                                  //   bio: user.bio,
                                  //   linkedinProfile: user.linkedinProfile,
                                  //   githubProfile: user.githubProfile,
                                  //   skills: user.skills,
                                  //   _id: user._id,
                                  // })
                                  className="buttonStyle"
                                >
                                  View Profile
                                </Button>
                              </Row>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </>
                );
              })
          }
        </Row>
        <StudentModal
          {...this.state.modalUser}
          // _id={this.state._id}
          // name={this.state.name}
          // surname={this.state.surname}
          // bio={this.state.bio}
          onHide={() => this.setState({ showModal: false })}
          show={this.state.showModal}
        ></StudentModal>
      </>
    );
  }
}
