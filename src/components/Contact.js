import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // Clear previous status
// Below fetch request replace the as 'http://localhost:3001/api/contact' if you are running in local
    try {
      const response = await fetch('https://formspree.io/f/xkgbaaja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'danger', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'danger', message: 'Network error. Please try again later.' });
    }
  };

  return (
    <Container id="contact" className="py-5 bg-light">
      <h2 className="text-center">Contact Me</h2>
      <p className="text-center">You can reach me at <a href="mailto:pawanyadv03@gmail.com">pawanyadv03@gmail.com</a></p>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {status && <Alert variant={status.type}>{status.message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                required
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;