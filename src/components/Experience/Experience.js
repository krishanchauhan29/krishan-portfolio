import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Experience</h2>
          <p className="section-subtitle">
            Professional internships and real-world work experience
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot">
                <span>{exp.icon}</span>
              </div>

              {/* Card */}
              <div className="timeline-card glass-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      <FiBriefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="exp-meta">
                    <div className="exp-duration">
                      <FiCalendar size={12} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="exp-location">
                      <FiMapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="exp-description">
                  {exp.description.map((point, pi) => (
                    <li key={pi}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Timeline line */}
          <div className="timeline-line" />
        </div>
      </div>
    </div>
  );
};

export default Experience;