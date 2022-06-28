import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Article from './components/Article';

const Main = () => {
  return (
    <main className="App-main">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:id' element={<Article />} />
        <Route path='*' element={<Home/>} />
      </Routes>
    </main>
  );
}

export default Main;
