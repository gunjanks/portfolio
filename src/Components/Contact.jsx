import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="contact-container">
      <Container className="py-5">
        <h2 className="text-center contact-title">Contact Me</h2>
        <h3 className="text-center email-link">
          <a href="mailto:salunkegunjank22@gmail.com">salunkegunjank22@gmail.com</a>
        </h3>
        <p className="text-center">
          Feel free to contact me with any inquiries or questions!
        </p>

        <Form className="contact-form" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#778da9' }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  className="text-hold"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#778da9' }}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  className="text-hold"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#778da9' }}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder=""
              className="text-hold"
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="outline-primary" className="submit-btn px-4" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>

      <div className="text-center social-icons">
        <a href="https://www.linkedin.com/in/gunjan-salunke-85145228a/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/gunjanks">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="mailto:salunkegunjank22@gmail.com">
        <i class="fa-solid fa-envelope"></i>
        </a>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body style={{ backgroundColor: "#1b263b", color: "#e0e1dd" }}>
          <h4 className="text-center">Thank You!</h4>
          <p className="text-center">We will contact you soon.</p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#1b263b", color: "#e0e1dd" }}>
          <Button variant="outline-light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
