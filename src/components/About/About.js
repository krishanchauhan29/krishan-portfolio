import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaOrcid, FaInstagram } from 'react-icons/fa';
import { personalInfo, education } from '../../portfolioData';
import './About.css';

const About = () => {
  const infoItems = [
    { icon: <FiMapPin size={16} />, label: 'Location', value: personalInfo.location },
    { icon: <FiMail size={16} />, label: 'Email', value: personalInfo.email, href: personalInfo.social.email },
    { icon: <FiPhone size={16} />, label: 'Phone', value: personalInfo.phone },
  ];

  const profileLinks = [
    { icon: <FaGithub size={18} />, label: 'GitHub', href: personalInfo.social.github, color: '#fff' },
    { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: personalInfo.social.linkedin, color: '#0077b5' },
    { icon: <FaTwitter size={18} />, label: 'Twitter/X', href: personalInfo.social.twitter, color: '#1da1f2' },
    { icon: <FaInstagram size={18} />, label: 'Instagram', href: personalInfo.social.instagram, color: '#E1306C' },
    { icon: <FaOrcid size={18} />, label: 'ORCID', href: personalInfo.social.orcid, color: '#a6ce39' },
    { icon: <FiExternalLink size={18} />, label: 'Streamlit', href: personalInfo.social.streamlit, color: '#ff4b4b' },
  ];

  return (
    <div className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="about-grid">
          {/* Left */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-image-wrapper">
              <img src="/profile.jpg" alt="Krishan Kumar Chauhan" className="about-image" />
              <div className="about-image-overlay" />
              <div className="about-status">
                <span className="status-dot" />
                Available for opportunities
              </div>
            </div>

            <div className="about-info-cards">
              {infoItems.map((item, i) => (
                <div key={i} className="info-card glass-card">
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <div className="info-label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="info-value link">{item.value}</a>
                      : <div className="info-value">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="about-subtitle">
              Hi there! I'm <span className="gradient-text">Krishan Kumar Chauhan</span>
            </h3>

            <p className="about-bio">
              I'm a <strong style={{color: 'var(--primary-light)'}}>Data Science & AI/ML engineer</strong> who
              loves turning messy real-world data into clean, impactful solutions. My journey spans medical imaging
              deep learning, NLP transformers, real-time BI platforms, and intelligent analytics — all deployed live
              and used by real people. My M.Tech dissertation pushed liver cirrhosis detection accuracy beyond
              state-of-the-art by <strong style={{color: 'var(--success)'}}>+13.44pp</strong>, published at
              <strong style={{color: 'var(--primary-light)'}}> IEEE NetCrypt 2026</strong>. When I'm not training
              models, I'm building tools that make data accessible to everyone — no PhD required. 🚀
            </p>

            {/* Education */}
            <div className="about-education">
              <h4 className="about-section-label">🎓 Education</h4>
              {education.map((edu, i) => (
                <div key={i} className="edu-item glass-card">
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-details">
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-field">{edu.field}</div>
                    <div className="edu-institution">{edu.institution}</div>
                    <div className="edu-meta">
                      <span>{edu.duration}</span>
                      {edu.cgpa && <span className="edu-score gradient-text">{edu.cgpa}</span>}
                      {edu.score && <span className="edu-score gradient-text">{edu.score}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Profile Links */}
            <div className="about-profiles">
              <h4 className="about-section-label">
                Connect with Me
                <span style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  fontWeight: 400,
                  letterSpacing: '1px',
                  marginTop: '4px',
                  textTransform: 'none'
                }}>
                  Let's build something together 🚀
                </span>
              </h4>
              <div className="profile-links">
                {profileLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link glass-card"
                  >
                    <span style={{ color: link.color }}>{link.icon}</span>
                    <span>{link.label}</span>
                    <FiExternalLink size={12} className="ext-icon" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;