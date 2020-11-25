import React, { Link } from "react";
import axios from "axios";
import { Modal, Button, Image, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portrait from "../../images/portrait.png";
import "../../styles/ModalStudent.css";

function StudentModal(props) {
  const sendEmail = async () => {
    const res = await fetch(
      `https://hire-dot-me-backend.herokuapp.com/hirers/sendEmail`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: props.objectID,
        }),
      }
    );

    if (!res.ok) {
      alert("error");
    }
  };
  return (
    <Modal {...props} className="mainModalStyle" size="lg" centered>
      <Modal.Header closeButton className="headerStyle">
        <Col className="p-0 m-0">
          <Image
            src={props.image || portrait}
            className="picModalStyle "
            alt="profile's image"
          />
        </Col>
        <Col>
          <Modal.Title className="titleModalStyle ">
            {props.name} {props.surname}
          </Modal.Title>
        </Col>
      </Modal.Header>
      <Modal.Body className="bodyModalStyle">
        <h4>About me</h4>
        <p>{props.bio}</p>

        <Button
          className="buttonStyle m-1"
          onClick={() => window.open(props.githubProfile, "_blank")}
        >
          <FaGithub className="iconStyle" size={40} />
        </Button>
        <Button
          className="buttonStyle m-1"
          onClick={() => window.open(props.linkedinProfile, "_blank")}
        >
          <FaLinkedin className="iconStyle" size={40} />
        </Button>
      </Modal.Body>
      <Modal.Footer className="footerModalStyle">
        <Button onClick={props.onHide} className="buttonStyle">
          Close
        </Button>
        <Button onClick={sendEmail} className="buttonStyle">
          Send an email
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentModal;
