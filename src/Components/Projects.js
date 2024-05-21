import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import image from './placeholder.png';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <Container className="d-flex flex-column align-items-center justify-content-center h-100">
        <Row className="text-center mb-4">
          <Col>
            <h2>Projects</h2>
          </Col>
        </Row>
        <Row className="w-100 d-flex justify-content-center">
          <Col xs={12} sm={6} md={4}>
              <Card className="mb-4 clickable-card">
                <Card.Img variant="top" src={image} className="card-img-top"/>
                <Card.Body>
                  <Card.Title>E-commerce Application</Card.Title>
                  <Card.Text>
                    An E-commerce application, complete with push notifications and a creative frontend!
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
              <Card className="mb-4 clickable-card">
                <Card.Img variant="top" src={image} className="card-img-top"/>
                <Card.Body>
                  <Card.Title>Univents</Card.Title>
                  <Card.Text>
                    An Event Tracking Mobile Application built using Flutter Framework.
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
