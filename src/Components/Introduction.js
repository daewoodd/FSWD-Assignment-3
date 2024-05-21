import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ReactTyped } from 'react-typed';
import profileImage from './profile.jpeg';
import './Introduction.css';

const Introduction = () => {
  return (
    <div id="home" className="introduction-section">
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="text-center">
          <Col>
            <Image src={profileImage} roundedCircle className="profile-image" />
            <h2 className="mt-4">
              <ReactTyped
                strings={['Hello, I\'m Taimur Mahmood']}
                typeSpeed={40}
                showCursor={false}
              />
            </h2>
            <p className="mt-2">
              <ReactTyped
                strings={['CS sophomore | Full-Stack Web Developer | React JS, .NET, DB Management | BSCS']}
                typeSpeed={30}
                startDelay={1500}
                showCursor={false}
              />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Introduction;
