import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../assets/html.png";
import Img2 from "../assets/css.png";
import Img3 from "../assets/js.png";
import Img4 from "../assets/java.png";
import f1 from "../assets/react.png";
import f2 from "../assets/express.png";
import f3 from "../assets/springBoot.png"
import d2 from "../assets/mysql.png";
import d1 from "../assets/mongo.png";
import o1 from "../assets/bootstrap.png";
import o2 from "../assets/react-bootsrap.png";
import o3 from "../assets/nodejs.png";
import s1 from "../assets/xampp.png";
import t1 from "../assets/git.png";
import t2 from "../assets/github.png";
import "./Skill.css";

const Skills = () => {
  return (
    <>
      <Container fluid className="SkillContainer py-5">
        <Container>
          <h2 className="headExp text-center mb-4">Skills</h2>

          {/* Web Technologies */}
          <h5 className="pb-3">Web Technologies:</h5>
          <Row className="justify-content-center">
            {[{ img: Img1, name: "HTML" }, { img: Img2, name: "CSS" }, { img: Img3, name: "JavaScript" }, { img: Img4, name: "Core Java" }].map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="complete">
                <img src={item.img} alt={item.name} className="skill-img" />
                <p className="text-lang">{item.name}</p>
              </Col>
            ))}
          </Row>

          {/* Frameworks */}
          <h5 className="pb-3 mt-4">Frameworks:</h5>
          <Row className="justify-content-center">
            {[{ img: f1, name: "React.js" }, { img: f2, name: "Express.js" },{ img: f3, name: "Spring Boot" }].map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="complete">
                <img src={item.img} alt={item.name} className="skill-img" />
                <p className="text-lang">{item.name}</p>
              </Col>
            ))}
          </Row>

          {/* Databases */}
          <h5 className="pb-3 mt-4">Databases:</h5>
          <Row className="justify-content-center">
            {[{ img: d1, name: "MongoDB" }, { img: d2, name: "MySQL" }].map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="complete">
                <img src={item.img} alt={item.name} className="skill-img" />
                <p className="text-lang">{item.name}</p>
              </Col>
            ))}
          </Row>

          {/* Others */}
          <h5 className="pb-3 mt-4">Others:</h5>
          <Row className="justify-content-center">
            {[{ img: o1, name: "Bootstrap 5" }, { img: o2, name: "React Bootstrap" }, { img: o3, name: "Node.js" }].map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="complete">
                <img src={item.img} alt={item.name} className="skill-img" />
                <p className="text-lang">{item.name}</p>
              </Col>
            ))}
          </Row>

          {/* Server */}
          <h5 className="pb-3 mt-4">Server:</h5>
          <Row className="justify-content-center">
            <Col xs={6} sm={4} md={3} className="complete">
              <img src={s1} alt="XAMPP" className="skill-img" />
              <p className="text-lang">XAMPP</p>
            </Col>
          </Row>

          {/* SCM Tools */}
          <h5 className="pb-3 mt-4">SCM Tools:</h5>
          <Row className="justify-content-center">
            {[{ img: t1, name: "Git" }, { img: t2, name: "GitHub" }].map((item, index) => (
              <Col key={index} xs={6} sm={4} md={3} className="complete">
                <img src={item.img} alt={item.name} className="skill-img" />
                <p className="text-lang">{item.name}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Skills;
