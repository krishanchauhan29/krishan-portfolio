import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../portfolioData';
import './Skills.css';

const skillIcons = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'SQL (MySQL)': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'C/C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'HuggingFace': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
  'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  'Grad-CAM': '🎯',
  'SHAP': '📊',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'SciPy': '🔬',
  'Matplotlib': 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
  'Seaborn': '🌊',
  'Plotly': '📈',
  'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
  'Tableau': 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  'MongoDB Atlas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'SQLAlchemy': '🗄️',
  'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
  'Google Colab': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'EDA': '🔍',
  'Feature Engineering': '⚙️',
  'CNN': '🧠',
  'NLP': '💬',
  'Transfer Learning': '🔄',
  'ARIMA': '📉',
  'Anomaly Detection': '⚠️',
  'Clustering': '🔵',
};

const categoryColors = {
  'Languages': '#6366f1',
  'ML & Deep Learning': '#06b6d4',
  'Data & Analytics': '#10b981',
  'Databases': '#f59e0b',
  'Tools & Deployment': '#ef4444',
  'AI/ML Concepts': '#8b5cf6',
};

const SkillItem = ({ skill, index }) => {
  const icon = skillIcons[skill];
  const isEmoji = icon && !icon.startsWith('http');

  return (
    <motion.div
      className="skill-item glass-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <div className="skill-icon">
        {isEmoji ? (
          <span className="skill-emoji">{icon}</span>
        ) : icon ? (
          <img src={icon} alt={skill} className="skill-img"
            onError={(e) => { e.target.style.display = 'none'; }} />
        ) : (
          <span className="skill-letter">{skill[0]}</span>
        )}
      </div>
      <span className="skill-name">{skill}</span>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...skills.map(s => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <div className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build intelligent solutions
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="skills-filter"
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
              style={activeCategory === cat ? {
                borderColor: categoryColors[cat] || 'var(--primary)',
                color: categoryColors[cat] || 'var(--primary-light)',
                background: `${categoryColors[cat]}20` || 'rgba(99,102,241,0.1)',
              } : {}}
            >
              {cat === 'All' ? '🌟 All' : skills.find(s => s.category === cat)?.icon + ' ' + cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-sections">
          {filteredSkills.map((skillGroup, gi) => (
            <motion.div
              key={skillGroup.category}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-group-header"
                style={{ borderColor: categoryColors[skillGroup.category] }}>
                <span className="skill-group-icon">{skillGroup.icon}</span>
                <h3 className="skill-group-title"
                  style={{ color: categoryColors[skillGroup.category] }}>
                  {skillGroup.category}
                </h3>
                <span className="skill-count">{skillGroup.items.length} skills</span>
              </div>
              <div className="skills-grid">
                {skillGroup.items.map((skill, si) => (
                  <SkillItem key={skill} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;