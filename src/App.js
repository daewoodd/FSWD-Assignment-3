import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

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