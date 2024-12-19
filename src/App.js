import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  const projectsRef = useRef(null);

  // Add this to verify ref is working
  const scrollToProjects = () => {
    console.log("Ref current value:", projectsRef.current);
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Navbar projectsRef={projectsRef} scrollToProjects={scrollToProjects} />
        <Hero projectsRef={projectsRef} scrollToProjects={scrollToProjects} />
        <Skills />
        <Projects ref={projectsRef} />
      </div>
    </Router>
  );
}

export default App;