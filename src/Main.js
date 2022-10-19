// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
// import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from "./pages/Education";

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
        {/* <Route path='/projects/:id' element={<Project />} /> */}
        <Route path='*' element={<Home />} />
      </Routes>
    </main>
  );
}

export default Main;
