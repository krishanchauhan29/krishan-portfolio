import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../../portfolioData';
import './Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications, academic achievements and hackathons
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card glass-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="cert-icon" style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}>
                <span>{cert.icon}</span>
              </div>

              {/* Content */}
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <div className="cert-issuer">
                  <FiAward size={12} style={{ color: cert.color }} />
                  <span>{cert.issuer}</span>
                </div>
                <div className="cert-year" style={{ color: cert.color }}>
                  {cert.year}
                </div>
              </div>

              {/* Accent line */}
              <div className="cert-accent" style={{ background: cert.color }} />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          className="cert-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '🏆', value: '3', label: 'HackerRank Certifications' },
            { icon: '🎓', value: '2', label: 'Online Course Certificates' },
            { icon: '🔬', value: '1', label: 'Research Presentation' },
            { icon: '🏅', value: '1', label: 'Hackathon Participation' },
            { icon: '⛓️', value: '1', label: 'NPTEL Certification' },
            { icon: '💹', value: '1', label: 'Accounting' },
          ].map((stat, i) => (
            <div key={i} className="cert-stat glass-card">
              <span className="cert-stat-icon">{stat.icon}</span>
              <span className="cert-stat-value gradient-text">{stat.value}</span>
              <span className="cert-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;