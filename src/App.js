import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Fade triggerOnce>
        <About />
      </Fade>
      <Fade triggerOnce>
        <Projects />
      </Fade>
      <Fade triggerOnce>
        <Skills />
      </Fade>
      <Fade triggerOnce>
        <Contact />
      </Fade>
      <Chatbot />
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {new Date().getFullYear()} Pawan Yadav. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;