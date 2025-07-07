import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="py-5">
      <Row className="justify-content-center mb-4">
        <Col xs={12} md={2} className="text-center">
          <Image src="/Pawan_Passport_Size.jpg" roundedCircle fluid />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2 className="text-center">About Me</h2>
          <p className="text-center">
            I am a DevOps/SRE engineer with a passion for automating and optimizing mission-critical deployments. I have experience in building and maintaining CI/CD pipelines, managing cloud infrastructure, and implementing monitoring and alerting solutions.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;