import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './sections/Services';
import Works from './sections/Works';
import About from './sections/About';
import Contact from './sections/Contact';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
        <Home />
      </div>
      <WhatsAppChat />
    </div>
  );
}

export default App;
