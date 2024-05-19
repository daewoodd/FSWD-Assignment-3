import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="text-center">
          <Col>
            <h2>Skills</h2>
            <div className="skills-badges mt-4">
              <Badge pill variant="primary" className="badge-animation">Flutter</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">Dart</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">Kotlin</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">Jetpack Compose</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">NodeJS</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">ExpressJS</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">ReactJS</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">Blazor</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">ASP.NET</Badge>{' '}
              <Badge pill variant="primary" className="badge-animation">C#</Badge>{' '}
            </div>
          </Col>
        </Row>
        <br></br>
      </Container>
    </div>
  );
};

export default Skills;
