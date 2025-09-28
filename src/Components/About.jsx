import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./About.css";
import Gunjan from "../assets/GunjanSalunke.jpg";
import Resume from "../pdfs/GunjanSalunkeResume.pdf";

const About = () => {
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate("/contact");
  };

  const handleResume = () => {
    const resumeUrl = Resume;
    window.open(resumeUrl, "_blank");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Gunjan resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="AboutContainer">
      <Container className="p-5">
        <Row className="align-items-center">
          <Col lg={1} xs={0}></Col>
          <Col lg={3} xs={12} className="text-center">
            <div className="img-border">
              <img
                src={Gunjan}
                alt="Gunjan Salunke"
                className="image-full img-fluid"
              />
            </div>
          </Col>
          <Col lg={7} xs={12} className="text-center text-lg-start">
            <div>
              <b className="head-About">About Me</b>
              <br />
              <span className="text-first">
                I'm <b style={{ color: "#415a77" }}>Gunjan Salunke</b>, a{" "}
                "Java Full Stack and MERN Stack Developer"
              </span>
              <p className="text-second pb-3">
                Passionate developer with <b>1+ year of experience</b> in both{" "}
                <b>Java Full Stack</b> and <b>MERN Stack (MongoDB, Express.js, React, Node.js)</b>{" "}
                web development. Skilled in building scalable, user-friendly applications with a 
                strong command of front-end and back-end technologies. Proven ability to deliver
                responsive designs, perform efficient RESTful API integrations, and implement
                robust Java-based solutions across various projects.
              </p>
            </div>
            <div>
              <button className="me-3 px-5 py-1 Hire-btn" onClick={handleHireMe}>
                Hire me
              </button>
              <button className="px-5 Resume-btn py-1" onClick={handleResume}>
                Resume
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
