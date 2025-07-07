import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAws, FaDocker, FaJenkins, FaPython, FaGitlab } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiGnubash, SiDatadog, SiNewrelic } from 'react-icons/si';

const skills = [
  { name: 'AWS', icon: <FaAws size={50} /> },
  { name: 'Docker', icon: <FaDocker size={50} /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={50} /> },
  { name: 'Terraform', icon: <SiTerraform size={50} /> },
  { name: 'Jenkins', icon: <FaJenkins size={50} /> },
  { name: 'GitLab CI', icon: <FaGitlab size={50} /> },
  { name: 'Prometheus', icon: <SiPrometheus size={50} /> },
  { name: 'Grafana', icon: <SiGrafana size={50} /> },
  { name: 'Python', icon: <FaPython size={50} /> },
  { name: 'Bash', icon: <SiGnubash size={50} /> },
  { name: 'Datadog', icon: <SiDatadog size={50} /> },
  { name: 'Newrelic', icon: <SiNewrelic size={50} /> },
  
];

const Skills = () => {
  return (
    <Container id="skills" className="py-5">
      <h2 className="text-center">Skills</h2>
      <Row className="text-center mt-4">
        {skills.map((skill, index) => (
          <Col key={index} xs={4} md={2} className="mb-4">
            {skill.icon}
            <p className="mt-2">{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
