import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiBookOpen, FiAward } from 'react-icons/fi';
import { publications } from '../../portfolioData';
import './Publications.css';

const Publications = () => {
  return (
    <div className="publications section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed research contributions in ML & Deep Learning
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="publications-grid">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              className="pub-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              {/* Type Badge */}
              <div className="pub-type-badge">
                {pub.type === 'Conference Paper'
                  ? <><FiAward size={12} /> IEEE Conference Paper</>
                  : <><FiBookOpen size={12} /> Book Chapter</>
                }
              </div>

              {/* Publisher Badge */}
              <div className="pub-publisher">
                <span className={`publisher-tag ${pub.publisher === 'IEEE Xplore' ? 'ieee' : 'bentham'}`}>
                  {pub.publisher}
                </span>
                <span className="pub-year">{pub.year}</span>
              </div>

              {/* Title */}
              <h3 className="pub-title">{pub.title}</h3>

              {/* Authors */}
              <p className="pub-authors">
                <span className="author-label">Authors: </span>
                {pub.authors}
              </p>

              {/* Venue */}
              <p className="pub-venue">
                📍 {pub.venue}
              </p>

              {/* Metrics */}
              {pub.metrics && (
                <div className="pub-metrics">
                  {pub.metrics.split('|').map((m, mi) => (
                    <span key={mi} className="metric-tag">{m.trim()}</span>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="pub-footer">
                {pub.paperId && (
                  <span className="paper-id">Paper ID: {pub.paperId}</span>
                )}
                {pub.doi && (
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                    className="pub-link">
                    <FiExternalLink size={14} /> View Paper
                  </a>
                )}
                {!pub.doi && (
                  <span className="pub-accepted">✅ Accepted</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ORCID Section */}
        <motion.div
          className="orcid-section glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="orcid-content">
            <div className="orcid-icon">🔬</div>
            <div>
              <h4 className="orcid-title">Research Profile</h4>
              <p className="orcid-text">View my complete research profile and publication record</p>
            </div>
            <a
              href="https://orcid.org/0009-0006-4563-958X"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
                alt="ORCID" width="16" />
              ORCID Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;