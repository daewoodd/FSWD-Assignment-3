import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img1 from './img1.JPG';
import img2 from './img2.JPG';
import img3 from './img3.JPG';
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
            <a href="https://universalchat.azurewebsites.net/" target="_blank" rel="noopener noreferrer" className="card-link">
              <Card className="mb-4 clickable-card">
                <Card.Img variant="top" src={img1} className="card-img-top"/>
                <Card.Body>
                  <Card.Title>Universal Chat</Card.Title>
                  <Card.Text>
                    A Real Time chatting web app built using Blazor Framework (ASP.NET, C#).
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <a href="https://github.com/chfaizan621/univent" target="_blank" rel="noopener noreferrer" className="card-link">
              <Card className="mb-4 clickable-card">
                <Card.Img variant="top" src={img2} className="card-img-top"/>
                <Card.Body>
                  <Card.Title>Univents</Card.Title>
                  <Card.Text>
                    An Event Tracking Mobile Application built using Flutter Framework.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <a href="https://github.com/chfaizan621/Gym_Management_System" target="_blank" rel="noopener noreferrer" className="card-link">
              <Card className="mb-4 clickable-card">
                <Card.Img variant="top" src={img3} className="card-img-top"/>
                <Card.Body>
                  <Card.Title>Gym Management System</Card.Title>
                  <Card.Text>
                    A Gym Management System built using HTML, CSS, and PHP.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
