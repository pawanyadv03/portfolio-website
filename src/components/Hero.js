import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container fluid className="bg-dark text-white text-center py-5">
      <Row>
        <Col>
          <h1>Site Reliability & DevOps Engineer</h1>
          <p>Building and maintaining scalable, reliable, and efficient infrastructure.</p>
          <Button variant="primary" href="#contact">Get In Touch</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
