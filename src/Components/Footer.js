import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-custom mt-auto py-3">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs={12} sm={4}>
            <p>© 2024 Taimur Mahmood</p>
          </Col>
          <Col xs={12} sm={4}>
            <p><a href="mailto:your-email@example.com" className="footer-link">qrow2112@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
