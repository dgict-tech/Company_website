import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './sections/Services';
import Works from './sections/Works';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
