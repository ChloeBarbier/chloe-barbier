// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Education from "./components/Education";

const Main = () => {
  return (
    <main className="App-main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<Project />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </main>
  );
}

export default Main;
