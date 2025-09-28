import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import bgVideo from "../assets/background.mp4"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="homeContainer">
      <Container className="back-home">
        <video autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="home-content">
          <b className="text-top">I'm a</b>
          <br />
          <b className="text-sec">
            Java Full Stack &<br /> MERN Stack Developer.
          </b>
          <br />
          <button
            className="button-project"
            onClick={() => navigate("/projects")}
          >
            Previous Projects
          </button>
        </div>
      </Container>
    </Container>
  );
};

export default Home;
