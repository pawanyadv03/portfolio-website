import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services (AWS)' },
  { name: 'AWS Certified Solutions Architect - Associate', issuer: 'Amazon Web Services (AWS)' },
  { name: 'Datadog Certified Fundamentals', issuer: 'Datadog' },
  { name: 'New Relic Verified Foundation (NVF)', issuer: 'New Relic' },
];

const Certifications = () => {
  return (
    <Container id="certifications" className="py-5 bg-light">
      <h2 className="text-center mb-4">Certifications</h2>
      <Row className="justify-content-center">
        {certifications.map((cert, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Fade triggerOnce>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">{cert.name}</Card.Title>
                  <Card.Text className="text-muted">{cert.issuer}</Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certifications;
