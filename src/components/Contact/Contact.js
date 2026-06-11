import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaTwitter, FaOrcid } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../portfolioData';
import { FaInstagram } from 'react-icons/fa';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        'krishan_portfolio',
        'template_g1axke3',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Krishan Kumar Chauhan',
        },
        '2QjRWlQUzavIIRgU_'
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.social.email,
      color: '#6366f1',
    },
    {
      icon: <FiPhone size={20} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:+919310787384`,
      color: '#10b981',
    },
    {
      icon: <FiMapPin size={20} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: '#f59e0b',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: personalInfo.social.github, label: 'GitHub', color: '#fff' },
    { icon: <FiLinkedin size={20} />, href: personalInfo.social.linkedin, label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaTwitter size={20} />, href: personalInfo.social.twitter, label: 'Twitter', color: '#1da1f2' },
    { icon: <FaInstagram size={20} />, href: personalInfo.social.instagram, label: 'Instagram', color: '#E1306C' },
    { icon: <FaOrcid size={20} />, href: personalInfo.social.orcid, label: 'ORCID', color: '#a6ce39' },
  ];

  return (
    <div className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">
            Have an opportunity or just want to say hi? My inbox is always open!
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="contact-grid">
          {/* Left — Info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-heading">Let's work together 🚀</h3>
            <p className="contact-desc">
              I'm currently open to Data Science, AI/ML Engineering, and Analytics roles.
              Whether it's a full-time position, internship, collaboration, or just a chat
              about data and AI — feel free to reach out!
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item, i) => (
                <div key={i} className="contact-info-item glass-card">
                  <div className="contact-info-icon" style={{ color: item.color, background: `${item.color}20` }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="contact-info-value link">{item.value}</a>
                      : <div className="contact-info-value">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <p className="social-label">Find me on</p>
              <div className="social-row">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn glass-card"
                    aria-label={s.label}
                  >
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration / Just saying hi!"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or what's on your mind..."
                  className="form-textarea"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className={`form-submit ${status}`}
                disabled={status === 'sending'}
              >
                {status === 'idle' && <><FiSend size={16} /> Send Message</>}
                {status === 'sending' && <>⏳ Sending...</>}
                {status === 'success' && <>✅ Message Sent!</>}
                {status === 'error' && <>❌ Failed. Try again</>}
              </button>

              <p className="form-note">
                Or email me directly at{' '}
                <a href={personalInfo.social.email} className="form-link">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;