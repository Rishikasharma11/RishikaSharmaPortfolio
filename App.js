import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {

  return (
    <>
       <Router>
    <Navbar/>
    {/* <About />
    <Skills />
    <Projects />
    <Contact /> */}
    <Routes> 
      <Route index element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    
    </>

  );
}

export default App;
