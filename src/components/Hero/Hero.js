import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiEye } from 'react-icons/fi';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { personalInfo, stats } from '../../portfolioData';
import './Hero.css';

function StarField(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function useTypewriter(words, speed = 100, deleteSpeed = 50, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setIsDeleting(true), pause);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return text;
}

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const target = parseFloat(value);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(2)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref}>
      {typeof value === 'number' && value % 1 !== 0
        ? count.toFixed(2)
        : Math.floor(count)}
      {suffix}
    </span>
  );
}

const Hero = () => {
  const typedText = useTypewriter(personalInfo.roles, 80, 40, 2000);

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: personalInfo.social.github, label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: <FaInstagram size={20} />, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: <FiMail size={20} />, href: personalInfo.social.email, label: 'Email' },
  ];

  return (
    <div className="hero">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarField />
        </Canvas>
      </div>

      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content container">
        <div className="hero-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero-greeting">
  Hello,
  <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" alt="wave" width="35" style={{marginLeft: '6px', marginRight: '4px', verticalAlign: 'middle'}} />
     I'm
</span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gradient-text">Krishan Kumar Chauhan</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="role-prefix">I'm a </span>
            <span className="role-typed gradient-text">{typedText}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-bio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FiEye size={16} />
              View CV
            </a>
            <a href={personalInfo.resume} download className="btn-secondary">
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>
          <p style={{
            fontSize: '1.5rem',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '10px',
            fontWeight: '700'
          }}>Let's Connect 🤝</p>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-ring ring-1" />
            <div className="hero-image-ring ring-2" />
            <div className="hero-image-ring ring-3" />
            <div className="hero-image-container">
              <img
                src="/profile.jpg"
                alt="Krishan Kumar Chauhan"
                className="hero-image"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="stat-card glass-card">
            <div className="stat-value gradient-text">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown size={20} />
        <span>Scroll Down</span>
      </motion.div>
    </div>
  );
};

export default Hero;