import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { projects } from '../../portfolioData';
import './Projects.css';

const categories = ['All', 'BI', 'AI/ML', 'NLP', 'DS'];

const categoryLabels = {
  'All': '🌟 All',
  'BI': '📊 BI',
  'AI/ML': '🤖 AI/ML',
  'NLP': '💬 NLP',
  'DS': '📈 Data Science',
};

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {project.featured && (
        <div className="featured-badge">
          <FiStar size={12} /> Featured
        </div>
      )}

      <div className="project-header">
        <div className="project-icon">
          {project.category === 'AI/ML' ? '🤖' :
           project.category === 'NLP' ? '💬' :
           project.category === 'BI' ? '📊' : '📈'}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="project-link" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="project-link live" aria-label="Live Demo">
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-footer">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="project-btn btn-ghost">
          <FiGithub size={14} /> Code
        </a>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            className="project-btn btn-primary-sm">
            <FiExternalLink size={14} /> Live Demo
          </a>
        ) : (
          <span className="project-btn btn-disabled">
            📄 IEEE Published
          </span>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Projects</h2>
          <p className="section-subtitle">
            Real-world AI/ML and Data Science projects — all deployed live
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Filter */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;