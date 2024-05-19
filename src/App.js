import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Introduction from './Introduction';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </div>
  );
}

export default App;