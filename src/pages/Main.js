import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Education from "./Education";

const Main = () => {
  return (
    <main className="App-main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </main>
  );
}

export default Main;
