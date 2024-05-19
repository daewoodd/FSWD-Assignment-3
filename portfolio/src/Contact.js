import React, { useState } from 'react';
import { Container, Row, Form, Button, Col, Alert } from 'react-bootstrap';
import './Contact.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (formData.name && formData.email && formData.message) {
      // Handle form submission logic
      setShowSuccess(true);
      setShowError(false);
      console.log('Form submitted:', formData);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };

  return (
    <div id="contact" className="contact-section">
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="w-100 d-flex justify-content-center">
          <Col xs={12} sm={8} md={6} lg={5}>
            <h2 className="text-center">Contact Me</h2>
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email" 
                  placeholder="Enter email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                />
              </Form.Group>
              <br></br>
              {showError && <Alert variant="danger">Please fill in all fields</Alert>}
              {showSuccess && <Alert variant="success">Email Successfully Sent!</Alert>}
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
