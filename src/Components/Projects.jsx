import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Modal, Button, Card, Container } from "react-bootstrap";
import "./Project.css";
import img1 from "../assets/Furniture.png";
import img2 from "../assets/flex_landing.png";
import img3 from "../assets/Food_project.png";
import img4 from "../assets/literate.png";
import img5 from "../assets/calculator.jpg";
import placeholderImage from "../assets/nit.png"; // Placeholder image

const projects = [
  {
    id: 1,
    name: "Furniture Website",
    technology:
      "Built with HTML, CSS, and JavaScript, displaying furniture products with a responsive design.",
    server: "Live Server",
    image: img1,
    pdf: "../pdfs/furniture.pdf",
  },
  {
    id: 2,
    name: "Flex Landing Page",
    technology:
      "A simple and responsive landing page built with HTML & CSS, showcasing a clean design.",
    server: "Live Server",
    image: img2,
    pdf: "/pdfs/project2.pdf",
  },
  {
    id: 3,
    name: "Foodies Website",
    technology:
      "A food-related website using HTML, CSS, and JavaScript, featuring interactive UI elements.",
    server: "Live Server",
    image: img3,
    pdf: "../pdfs/foodies.pdf",
  },
  {
    id: 4,
    name: "Literate Website",
    technology:
      "An educational platform made with HTML, CSS, and JavaScript, deployed on Vercel.",
    server: "Vercel",
    image: img4,
    pdf: "../pdfs/literate.pdf",
  },
  {
    id: 5,
    name: "NIT College Website",
    technology:
      "An official college website developed using HTML, CSS, and PHP, hosted on XAMPP.",
    server: "XAMPP",
    link: "https://www.nitnasik.com/",
  },
  {
    id: 6,
    name: "Calculator using basics Java",
    technology:
      "A simple calculator application developed using Core Java implementing basic arithmetic operations.",
    server: "Standalone Java Application",
    image: img5,
    // link: "https://github.com/gunjanks/Calculator-using-basics-java",
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const handleShow = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <Container fluid className="complete-contain">
      <Container fluid className="slider-container">
        <h2 className="slider-title">My Projects</h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="slide-item">
              <Card className="project-card">
                <Card.Img
                  variant="top"
                  src={project.image || placeholderImage}
                  className="project-img"
                />
                <Card.Body className="card-body">
                  <Card.Title style={{ color: "#000814" }}>
                    {project.name}
                  </Card.Title>
                  <Card.Text>
                    <strong>Info:</strong> {project.technology}
                    <br />
                    <strong>Server:</strong> {project.server}
                  </Card.Text>

                  <div className="project-buttons">
                    {project.image && (
                      <Button
                        className="buttpro1"
                        onClick={() => handleShow(project.image)}
                      >
                        View
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        className="buttpro1"
                        onClick={() =>
                          window.open(project.link, "_blank")
                        }
                      >
                        Live
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Body style={{ backgroundColor: "#000814" }}>
            <img
              src={selectedImage}
              alt="Project Screenshot"
              className="img-fluid"
            />
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#000814" }}>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Container>
  );
};

export default Projects;
