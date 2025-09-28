import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import "./Experiance.css";

const Experiance = () => {
  const [showSumagoModal, setShowSumagoModal] = useState(false);

  return (
    <div className={showSumagoModal ? "blur-background" : ""}>
      <Container fluid className="ExperianceContainer p-4">
        <Container>
          <div className="complecard p-5">
            <b className="headExp">Work Experience</b>

            {/* Sumago Experience */}
            <div className="exp-section">
              <span><b>Sumago Infotech Pvt. Ltd.</b> – MERN Stack Trainee Intern</span><br></br>
              <span className="duration">April 2024 – october 2024</span>
              <p>
                Worked on full-stack applications using React, Node, Express, and MongoDB. Gained hands-on experience in API development and frontend design.
              </p>
              <span className="read-more-text" onClick={() => setShowSumagoModal(true)}>READ MORE...</span>
            </div>
          </div>
        </Container>
      </Container>

      {/* Modal: Sumago */}
      <Modal
        show={showSumagoModal}
        onHide={() => setShowSumagoModal(false)}
        centered
        backdrop="static"
        className="custom-modal"
      >
        <Modal.Body className="modal-card">
          <h5 className="head-modal">Sumago Infotech Pvt. Ltd. – MERN Stack Trainee</h5>
          <p className="duration">Jan 2024 – April 2024</p>

          <b className="secheadexp">Frontend (React.js):</b>
          <p className="exptext">
            Built dynamic UI with React and managed component state using Redux. Focused on responsive design.
          </p>

          <b className="secheadexp">Backend (Node.js + Express.js):</b>
          <p className="exptext">
            Created RESTful APIs, implemented routing and middleware, and secured endpoints.
          </p>

          <b className="secheadexp">Database (MongoDB):</b>
          <p className="exptext">
            Performed CRUD operations, modeled flexible schemas, and worked with collections.
          </p>

          <b className="secheadexp">Version Control:</b>
          <p className="exptext">
            Used Git and GitHub for code tracking and team collaboration.
          </p>

          <b className="secheadexp">Team Collaboration:</b>
          <p className="exptext">
            Participated in Agile activities and delivered assigned modules on time.
          </p>

          <Button className="expbtn" onClick={() => setShowSumagoModal(false)}>Close</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Experiance;
