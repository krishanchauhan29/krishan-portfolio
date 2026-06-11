import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Publications from './components/Publications/Publications';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="publications"><Publications /></section>
        <section id="experience"><Experience /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;