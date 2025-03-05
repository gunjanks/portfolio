import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './About.css';
import Gunjan from '../assets/Gunjan.png';
import Resume from '../pdfs/Gunjan resume.pdf';
const About = () => {
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate('/contact'); 
  };

  const handleResume = () => {
    const resumeUrl = Resume;
    window.open(resumeUrl, '_blank'); 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Gunjan resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="AboutContainer">
      <Container className="p-5">
        <Row>
          <Col lg={1}></Col>
          <Col lg={4}>
            <div className="img-border">
              <img src={Gunjan} alt="Gunjan Salunke" height={300} className="image-full" />
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <b className="head-About " >About Me</b>
              <br />
              <span className="text-first ">
                I'm <b style={{ color: '#415a77' }}>Gunjan Salunke</b>, a "MERN Full Stack Web Developer"
              </span>
              <p className="text-second">
                Dynamic <b>6 Month’s</b> experience & solid foundation in MERN (MongoDB, Express.js, React, Node.js) full-stack web development.
                Possesses hands-on experience gained through academic projects and personal initiatives, showcasing proficiency in front-end and
                back-end development technologies. Strong understanding of JavaScript fundamentals, responsive web design, and RESTful API integration.
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
