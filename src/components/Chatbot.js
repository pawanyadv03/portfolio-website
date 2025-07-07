import React, { useState } from 'react';
import { Button, Offcanvas, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaRobot } from 'react-icons/fa';

const Chatbot = () => {
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedAgent, setSelectedAgent] = useState('General AI');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = '';
      switch (selectedAgent) {
        case 'General AI':
          aiResponse = `Hello from General AI! You said: "${input}"`;
          break;
        case 'Technical Support':
          aiResponse = `Technical Support here. How can I assist with: "${input}"?`;
          break;
        case 'Sales Assistant':
          aiResponse = `Sales Assistant at your service. Regarding: "${input}", what more can I tell you?`;
          break;
        case 'ChatGPT':
          aiResponse = `ChatGPT says: "${input}" is an interesting query!`;
          break;
        case 'Gemini':
          aiResponse = `Gemini responds: I understand you're asking about "${input}". How can I elaborate?`;
          break;
        default:
          aiResponse = `I am ${selectedAgent}. You said: "${input}"`;
      }
      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
    }, 1000);
  };

  const handleAgentSelect = (eventKey) => {
    setSelectedAgent(eventKey);
    setMessages([]); // Clear messages when agent changes
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <FaRobot size={30} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chat with AI</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Agent: ${selectedAgent}`}
            onSelect={handleAgentSelect}
            className="mb-3"
          >
            <Dropdown.Item eventKey="General AI">General AI</Dropdown.Item>
            <Dropdown.Item eventKey="Technical Support">Technical Support</Dropdown.Item>
            <Dropdown.Item eventKey="Sales Assistant">Sales Assistant</Dropdown.Item>
            <Dropdown.Item eventKey="ChatGPT">ChatGPT</Dropdown.Item>
            <Dropdown.Item eventKey="Gemini">Gemini</Dropdown.Item>
          </DropdownButton>

          <div className="flex-grow-1 overflow-auto mb-3" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`text-${msg.sender === 'user' ? 'right' : 'left'}`}>
                <strong>{msg.sender === 'user' ? 'You' : selectedAgent}:</strong> {msg.text}
              </div>
            ))}
          </div>

          <Form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
            <Form.Group className="d-flex">
              <Form.Control
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button variant="primary" type="submit" className="ml-2">
                Send
              </Button>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Chatbot;