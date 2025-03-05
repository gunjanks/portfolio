import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import "./Experiance.css";

const Experiance = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={showModal ? "blur-background" : ""}>
      <Container fluid className="ExperianceContainer p-4">
        <Container>
          <div className="complecard p-5">
            <b className="headExp">Work Experience </b>
            <p>Sumago Infotech Pvt. Ltd.  (8th April 2024 – 8th October 2024) </p>
            <b>Roles and Responsibilities:</b><br />
            <span>
              <b>Front End Developer:</b> Proficient in React.js for building interactive user interfaces, managing state with Redux & integrating with RESTful APIs.<br />
              <b>Back End Developer:</b> Good in Node.js and Express.js for server-side development, creating APIs, and handling HTTP requests.<br />
              <b>Database Management:</b> Familiarity with MongoDB for NoSQL database operations, including CRUD operations and schema design.
            </span>
            <button className="expbtn" onClick={() => setShowModal(true)}>Read More</button>
          </div>
        </Container>
      </Container>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        className="custom-modal"
      >
        <Modal.Body className="modal-card">
          <h5 className="head-modal" >As a MERN Stack Trainee</h5>
          <p>
            <b className="hedingexp">Roles and Responsibilities :-</b><br></br>
            <b className="secheadexp">Front End Developer :</b> <span className="exptext">Proficient in React.js for building interactive user interfaces, managing state with Redux & integrating with RESTful APIs.</span><br></br>
            <b className="secheadexp">Back End Developer :</b> <span className="exptext"> Good in Node.js and Express.js for server-side development, creating APIs, and handling HTTP requests.</span><br></br>
            <b className="secheadexp">Database Management :</b><span className="exptext"> Familiarity with MongoDB for NoSQL database operations, including CRUD operations and schema design.</span><br></br>
            <b className="secheadexp">Version Control :</b><span className="exptext"> Proficient with Git for version control, including branching, merging, and collaboration via platforms like GitHub.</span><br></br>
            <b className="secheadexp">Version Control :</b><span className="exptext"> Using version control systems like Git for code management and collaboration. Participating in code reviews and ensuring code quality.</span><br></br>
            <b className="secheadexp">MongoDB :</b> <span className="exptext"> NoSQL database, often used for its scalability and flexibility. Uses JSON-like documents (BSON format) for data storage. Schema free, allowing for easier data manipulation & integration.</span><br></br>
            <b className="secheadexp">Express.js :</b> <span className="exptext"> Web application framework for Node.js. Simplifies the creation of APIs and handling of HTTP requests.</span><br></br>
            <b className="secheadexp">React :</b><span className="exptext"> JavaScript library for building user interfaces. Virtual DOM for efficient rendering of UI components. Widely used for building single-page applications (SPAs) and progressive web applications (PWAs).</span><br></br>
            <b className="secheadexp">Node.js :</b><span className="exptext"> JavaScript runtime environment built on Chrome’s V8 engine. execute JavaScript code on the server-side. Non-blocking, I/O model for handling concurrent connections efficiently.</span><br></br>
            <b className="secheadexp">Deployment and Maintenance :</b><span className="exptext"> Assisting in deploying applications to web servers. Monitoring and maintaining applications post-launch.</span><br></br>
            <span className="exptext">Managing different technologies and ensuring compatibility between versions.</span><br></br>
            <b className="secheadexp">Collaboration :</b> <span className="exptext">Effective communicator with a demonstrated ability to work in cross-functional teams, contributing to project success through teamwork and adaptability.</span><br></br>

          </p>
          <Button className="expbtn"  onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Experiance;
