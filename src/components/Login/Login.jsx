import React, { Component } from "react";
import { Form, Button, Container, Jumbotron, Col, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../../styles/JumboStyle.css";
import hireT from "../../images/hireT.png";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  login = async (event) => {
    event.preventDefault();
    //const history = createBrowserHistory();
    const res = await fetch(`${process.env.REACT_APP_URL_BE}/hirers/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
    if (res.ok) {
      console.log(res);
      const json = await res.json();
      localStorage.setItem("accessToken", json.token);
      localStorage.setItem("refreshToken", json.refreshToken);
      this.props.history.push("/homepage");
      //history.push("/");
      //window.location.reload();
    }
  };

  render() {
    return (
      <div className="loginStyle">
        <Row className="my-5">
          <Col className="col-4 ">
            <img src={hireT} alt="" width="80%" className="ml-5" />
          </Col>
          <Col>
            <Form>
              <Container>
                <h4 className="mb-2">Login here</h4>
                <Form.Group controlId="formBasicEmail ">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={this.state.email}
                    type="email"
                    placeholder="Enter the email"
                    onChange={(val) =>
                      this.setState({ email: val.currentTarget.value })
                    }
                    className="formStyle"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={this.state.password}
                    type="password"
                    placeholder="Enter the password"
                    onChange={(val) =>
                      this.setState({ password: val.currentTarget.value })
                    }
                    className="formStyle"
                  />
                </Form.Group>
                <Row className="mt-1">
                  <Col className="">
                    <Button
                      type="submit"
                      onClick={this.login}
                      value="login"
                      className="mr-4 jumboButtonStyle"
                    >
                      Login
                    </Button>
                  </Col>
                  <Col>
                    <Row>You need to signup?</Row>
                    <Row>
                      <Link to="/signup$hirer" className="linkStyle">
                        Click here
                      </Link>
                      <span className="ml-1">if you're a recruiter</span>
                    </Row>
                    <Row>
                      <Link to="/signup$student" className="linkStyle">
                        Click here
                      </Link>
                      <span className="ml-1">if you're searching for work</span>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(LoginForm);
