import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaTwitter, FaOrcid, FaInstagram } from 'react-icons/fa';
import { personalInfo } from '../../portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub size={18} />, href: personalInfo.social.github, label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: <FaInstagram size={18} />, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: <FiMail size={18} />, href: personalInfo.social.email, label: 'Email' },
    { icon: <FaOrcid size={18} />, href: personalInfo.social.orcid, label: 'ORCID' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">KKC</span>
                <span className="logo-bracket">/&gt;</span>
              </div>
              <p className="footer-tagline">
                M.Tech Data Science | IEEE Published | 6+ Deployed Projects | Let's build something great.
              </p>
              <div className="footer-socials">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="footer-social" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul>
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4 className="footer-heading">Contact</h4>
              <div className="footer-contact-items">
                <a href={personalInfo.social.email} className="footer-contact-item">
                  <FiMail size={14} />
                  <span>{personalInfo.email}</span>
                </a>
                <div className="footer-contact-item">
                  <span>📍</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="footer-contact-item">
                  <span>🎓</span>
                  <span>{personalInfo.university}</span>
                </div>
                <a href={personalInfo.resume} download className="footer-resume-btn">
                  📄 Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copy">
              © 2026 <span className="gradient-text">Krishan Kumar Chauhan</span>. All rights reserved.
            </p>
            <p className="footer-made">
              Built with ⚛️ React + 🌐 Three.js + 💜 Framer Motion
            </p>
            <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;