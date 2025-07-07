import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Automated the build, test, and deployment process for a microservices application using Jenkins and Docker.',
    imageUrl: 'https://via.placeholder.com/350x200',
    githubLink: '#',
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Managed AWS infrastructure using Terraform, enabling version control and consistent environment provisioning.',
    imageUrl: 'https://via.placeholder.com/350x200',
    githubLink: '#',
  },
  {
    title: 'Monitoring & Alerting Dashboard',
    description: 'Developed a comprehensive monitoring dashboard using Prometheus and Grafana to track system health and performance.',
    imageUrl: 'https://via.placeholder.com/350x200',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="py-5 bg-light">
      <h2 className="text-center">Projects</h2>
      <Row>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;