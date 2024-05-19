import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-custom mt-auto py-3">
      <Container>
        <Row className="justify-content-md-center text-center">
          <Col xs={12} sm={4}>
            <p>© 2024 Muhammad Faizan</p>
          </Col>
          <Col xs={12} sm={4}>
            <p><a href="mailto:your-email@example.com" className="footer-link">chfaizan621@gmail.com</a></p>
          </Col>
          <Col xs={12} sm={4}>
            <p><a href="tel:+1234567890" className="footer-link">(+92) 301-5249252</a></p>
          </Col>
        </Row>
        <Row className="justify-content-md-center text-center">
          <Col xs={12}>
            <a href="https://github.com/chfaizan621" className="footer-icon"><FaGithub /></a>
            <a href="https://stackoverflow.com/users/25120616/muhammad-faizan" className="footer-icon"><FaStackOverflow /></a>
            <a href="https://www.instagram.com/faizan_ch26/" className="footer-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/muhammad-faizan-34a121226/" className="footer-icon"><FaLinkedin /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
