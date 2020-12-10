import React, { Component } from "react";
import { Form, Button, Col, Container, Image, Row } from "react-bootstrap";
import hireTcropped from "../../images/hireTcropped.png";

export default class HirerSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      country: "",
      linkedinProfile: "",
      agencyProfile: "",
    };

    this.name = this.name.bind(this);
    this.surname = this.surname.bind(this);
    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.country = this.country.bind(this);
    this.linkedinProfile = this.linkedinProfile.bind(this);
    this.agencyProfile = this.agencyProfile.bind(this);
  }

  name(event) {
    this.setState({ name: event.target.value });
  }
  surname(event) {
    this.setState({ surname: event.target.value });
  }
  email(event) {
    this.setState({ email: event.target.value });
  }
  password(event) {
    this.setState({ password: event.target.value });
  }
  country(event) {
    this.setState({ country: event.target.value });
  }
  linkedinProfile(event) {
    this.setState({ linkedinProfile: event.target.value });
  }
  agencyProfile(event) {
    this.setState({ agencyProfile: event.target.value });
  }

  signupRecruiter = async (event) => {
    event.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_URL_BE}/hirers/signup`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password,
        country: this.state.country,
        linkedinProfile: this.state.linkedinProfile,
        githubProfile: this.state.githubProfile,
      }),
    });
    if (res.ok) {
      console.log(res);
      this.props.history.push("/homepage");
    }
  };

  render() {
    return (
      <div>
        <Row className="justify-content-center my-5">
          <Image src={hireTcropped} width="20%" />
        </Row>
        <Container className="col-4">
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  value={this.state.name}
                  onChange={(val) =>
                    this.setState({ name: val.currentTarget.value })
                  }
                  type="firstName"
                  placeholder="Enter your first name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  value={this.state.surname}
                  onChange={(val) =>
                    this.setState({ surname: val.currentTarget.value })
                  }
                  type="lastName"
                  placeholder="Enter your last name"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={this.state.email}
                  onChange={(val) =>
                    this.setState({ email: val.currentTarget.value })
                  }
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={(val) =>
                    this.setState({ password: val.currentTarget.value })
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridLink">
                <Form.Label>Linkedin profile</Form.Label>
                <Form.Control
                  value={this.state.linkedinProfile}
                  onChange={(val) =>
                    this.setState({ linkedinProfile: val.currentTarget.value })
                  }
                  placeholder="Enter your linkedin profile"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLink2">
                <Form.Label>Name of the hiring agency</Form.Label>
                <Form.Control
                  value={this.state.agencyProfile}
                  onChange={(val) =>
                    this.setState({ agencyProfile: val.currentTarget.value })
                  }
                  placeholder="Enter the name of the hiring agency"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridNation">
                <Form.Label>Nation</Form.Label>
                <Form.Control
                  value={this.state.country}
                  onChange={(val) =>
                    this.setState({ country: val.currentTarget.value })
                  }
                  placeholder="Enter your country"
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            <Button
              onClick={this.signupRecruiter}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
