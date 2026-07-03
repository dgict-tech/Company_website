import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './sections/Services';
import Works from './sections/Works';
import About from './sections/About';
import Contact from './sections/Contact';
import WhatsAppChat from './components/WhatsAppChat';
import ScrollToTop from './components/ScrollToTop';
import ServiceRequest from './pages/Servicerequest';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
 
  useEffect(() => {
    if (!hash) return;
 
    const id = hash.replace('#', '');
    let attempts = 0;
    const maxAttempts = 20;
 
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < maxAttempts) {
        attempts += 1;
        setTimeout(tryScroll, 50);
      }
    };
 
    tryScroll();
  }, [pathname, hash]);
 
  return null;
}

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToHash />
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicerequest" element={<ServiceRequest />} />
        </Routes>
        </div>
      <WhatsAppChat />
      <ScrollToTop />
    </div>
  );
}

export default App;
