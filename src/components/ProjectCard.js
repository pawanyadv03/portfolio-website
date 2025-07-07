import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary" href={githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
