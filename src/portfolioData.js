// ==================== PORTFOLIO DATA ====================
export const personalInfo = {
  name: "Krishan Kumar Chauhan",
  roles: ["Data Analyst", "AI/ML Engineer", "Published Researcher", "Data Scientist"],
  email: "krrishnachauhan29@gmail.com",
  phone: "+91-9310787384",
  location: "Greater Noida, India",
  cgpa: "8.5",
  university: "Gautam Buddha University",
  degree: "Integrated B.Tech + M.Tech, CSE (Data Science)",
  bio: "Hey! I'm a Data Science Post Graduate from Gautam Buddha University who gets genuinely excited about building things that work not just notebooks that run. I've shipped 6+ live projects, got a paper published at IEEE, and I'm always chasing that moment when a model finally clicks or a dashboard makes someone's job easier. Currently open to Data Science, AI/ML, and Analytics roles where I can keep doing exactly that.",
  social: {
    github: "https://github.com/krishanchauhan29",
    linkedin: "https://www.linkedin.com/in/krishan-chauhan29/",
    twitter: "https://x.com/krishna_29___",
    orcid: "https://orcid.org/0009-0006-4563-958X",
    streamlit: "https://share.streamlit.io/user/krishanchauhan29",
    instagram: "https://www.instagram.com/krishna.chauhan_/",
    email: "mailto:krrishnachauhan29@gmail.com",
  },
  resume: "/Krishan_Resume.pdf",
};

export const stats = [
  { value: 6, label: "Live Projects", suffix: "+" },
  { value: 2, label: "Publications", suffix: "" },
  { value: 8, label: "Certifications", suffix: "+" },
  { value: 5, label: "HackerRank Stars", suffix: "★" },
];

export const skills = [
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "SQL (MySQL)", "JavaScript", "C/C++"],
  },
  {
    category: "ML & Deep Learning",
    icon: "🤖",
    items: ["Scikit-learn", "PyTorch", "TensorFlow", "HuggingFace", "OpenCV", "Grad-CAM", "SHAP"],
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MySQL", "SQLite", "MongoDB Atlas", "SQLAlchemy"],
  },
  {
    category: "Tools & Deployment",
    icon: "🛠️",
    items: ["Streamlit", "Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "FastAPI"],
  },
  {
    category: "AI/ML Concepts",
    icon: "🧠",
    items: ["EDA", "Feature Engineering", "CNN", "NLP", "Transfer Learning", "ARIMA", "Anomaly Detection", "Clustering"],
  },
];

export const projects = [
  {
    title: "InsightPro BI Platform",
    description: "Enterprise-grade Real-Time Business Intelligence Platform with live stock APIs, ARIMA forecasting, Isolation Forest anomaly detection, KMeans clustering, SQL + MongoDB integration, and geo-visualization.",
    tech: ["Pandas", "Scikit-learn", "Plotly", "Folium", "MongoDB", "SQLite", "Streamlit"],
    github: "https://github.com/krishanchauhan29/realtime-bi-platform",
    live: "https://realtime-bi-platform292003.streamlit.app/",
    category: "BI",
    featured: true,
  },
  {
    title: "AG-DenseNet121 — Liver Cirrhosis Classification",
    description: "M.Tech Dissertation: Attention-guided DenseNet121 for automated liver cirrhosis classification from T2W MRI images. Achieved 77.24% accuracy, AUC=0.849, outperforming SotA by +13.44pp. Published at IEEE NetCrypt 2026.",
    tech: ["PyTorch", "CNN", "Grad-CAM", "SHAP", "Transfer Learning"],
    github: "https://github.com/krishanchauhan29/ag-densenet121-liver-cirrhosis",
    live: null,
    category: "AI/ML",
    featured: true,
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Sentence-level multi-class sentiment analysis (Positive/Negative/Neutral) using RoBERTa transformer via HuggingFace. Real-time confidence gauge meters with interactive Streamlit dashboard.",
    tech: ["HuggingFace", "RoBERTa", "PyTorch", "Streamlit", "NLP"],
    github: "https://github.com/krishanchauhan29/nlp-sentiment-analysis",
    live: "https://nlp-sentiment-analysis292003.streamlit.app/",
    category: "NLP",
    featured: true,
  },
  {
    title: "ATS Resume Analyzer",
    description: "AI-powered ATS scoring engine supporting PDF/Image/DOCX. Analyzes resumes across 19 job roles with industry-standard scoring (0-100), keyword gap analysis, and downloadable Excel + PDF reports.",
    tech: ["NLTK", "PDFPlumber", "Pytesseract", "ReportLab", "Streamlit"],
    github: "https://github.com/krishanchauhan29/ats-resume-analyzer",
    live: "https://ats-resume-analyzer292003.streamlit.app/",
    category: "NLP",
    featured: false,
  },
  {
    title: "Smart Business Analytics Engine",
    description: "AI-powered analytics engine supporting multi-format data ingestion (CSV, Excel, PDF, Image/OCR). Auto-generates EDA, KPIs, outlier detection, Random Forest ML, and one-click reports.",
    tech: ["Scikit-learn", "PDFPlumber", "Pytesseract", "ReportLab", "Streamlit"],
    github: "https://github.com/krishanchauhan29/smart-analytics-engine",
    live: "https://smart-analytics-engine292003.streamlit.app/",
    category: "DS",
    featured: false,
  },
  {
    title: "Customer Churn Prediction",
    description: "End-to-end ML pipeline on IBM Telco dataset. Applied SMOTE to fix class imbalance, trained Random Forest achieving 86.09% accuracy and AUC=0.929. Identified $168K monthly revenue at risk.",
    tech: ["Scikit-learn", "SMOTE", "Random Forest", "Plotly", "Streamlit"],
    github: "https://github.com/krishanchauhan29/customer-churn-prediction",
    live: "https://customer-churn-prediction292003.streamlit.app/",
    category: "DS",
    featured: false,
  },
  {
    title: "HR Analytics Pipeline",
    description: "End-to-end HR analytics pipeline on IBM dataset (1,470 employees). SQL-style queries revealing Sales dept at 20.6% attrition and overtime employees 3x more likely to leave.",
    tech: ["Pandas", "SQL-style", "Plotly", "openpyxl", "Streamlit"],
    github: "https://github.com/krishanchauhan29/hr-analytics-pipeline",
    live: "https://hr-analytics-pipeline292003.streamlit.app/",
    category: "DS",
    featured: false,
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Analyzed 9,994 transaction records from Superstore dataset. Uncovered Central region operates at 10.4% profit margin. Built interactive dashboard with dynamic filters, KPI cards, and 6 Plotly charts.",
    tech: ["Python", "Pandas", "Plotly", "Streamlit", "openpyxl"],
    github: "https://github.com/krishanchauhan29/sales-analytics-dashboard",
    live: "https://sales-analytics-dashboard292003.streamlit.app/",
    category: "DS",
    featured: false,
  },
  {
    title: "Decentralized Crowdfunding Platform",
    description: "Blockchain-based crowdfunding platform built on Ethereum. Smart contracts handle fund collection and distribution transparently. Built with React, Web3.js, and Solidity smart contracts deployed on Vercel.",
    tech: ["React", "Solidity", "Web3.js", "Blockchain","Ethereum", "TypeScript"],
    github: "https://github.com/krishanchauhan29/crowdfunding-web3",
    live: "https://crowdfunding-lyart-rho.vercel.app/",
    category: "AI/ML",
    featured: false,
  },
];

export const publications = [
  {
    title: "Multi-Scale Attention-Guided AG-DenseNet121 for Automated Liver Cirrhosis Stage Classification from T2-Weighted MRI Images",
    authors: "Krishan KumarChauhan, Dr. Akash Kumar",
    venue: "NetCrypt International Conference 2026",
    publisher: "IEEE Xplore",
    paperId: "2378",
    year: "2026",
    type: "Conference Paper",
    doi: "/ieee_paper.pdf",
    metrics: "Accuracy: 77.24% | AUC: 0.849 | Outperforms SotA by +13.44pp",
  },
  {
    title: "Recommendations for the Future of Artificial Intelligence: Opportunities, Ethics, and Challenges",
    authors: "Krishan Kumar Chauhan, Dr. Akash Kumar, Dr. Sujit Sargam Sahoo",
    venue: "Bentham Science Publishers",
    publisher: "Book Chapter",
    year: "2026",
    type: "Book Chapter",
    doi: "/book_chapter.pdf",
    metrics: "Accepted for Publication",
  },
];

export const experience = [
  {
    role: "Data Science & Analyst Intern",
    company: "Zidio Development",
    location: "Noida, Delhi NCR (On-site)",
    duration: "Jun 2025 – Aug 2025",
    description: [
  "Developed and deployed end-to-end data science solutions using Python, Pandas, and Scikit-learn; engineered ML pipelines that solved real business problems and directly supported product decisions.",
  "Conducted in-depth EDA, feature engineering & model evaluation on production datasets; translated complex findings into clear, actionable insights for cross-functional stakeholders.",
  "Worked within an structured team environment participated in sprint planning, peer code reviews, and live product testing, gaining exposure to how AI/ML ships in a real company.",
],
    icon: "🚀",
  },
  {
    role: "Web Development Intern",
    company: "Coincent (via WorInWell)",
    location: "Remote",
    duration: "Nov 2023 – Dec 2023",
    description: [
  "Completed intensive Web Development training (CSS3 & HTML5); designed and built fully responsive, cross-browser compatible web pages from scratch.",
  "Implemented modern UI layouts using Flexbox and CSS Grid; applied best practices for clean, maintainable, and scalable front-end code.",
  "Gained hands-on exposure to real-world development workflows including version control (Git) and collaborative code review processes.",
],
    icon: "💻",
  },
];

export const education = [
  {
    degree: "Integrated B.Tech + M.Tech",
    field: "CSE — Data Science Specialization",
    institution: "Gautam Buddha University, Greater Noida",
    duration: "Aug 2021 – Jul 2026",
    cgpa: "8.5/10",
    icon: "🎓",
  },
  {
    degree: "Senior Secondary (12th)",
    field: "Science — CBSE",
    institution: "Gautam Buddha Balak Inter College",
    duration: "2021",
    score: "85.8%",
    icon: "📚",
  },
  {
    degree: "Secondary (10th)",
    field: "CBSE",
    institution: "Gautam Buddha Balak Inter College",
    duration: "2019",
    score: "74.8%",
    icon: "📖",
  },
];

export const certifications = [
  { name: "SQL (Basic & Intermediate)", issuer: "HackerRank", year: "2026", icon: "🏆", color: "#00EA64" },
  { name: "Python (Basic) — 5⭐", issuer: "HackerRank", year: "2026", icon: "🐍", color: "#00EA64" },
  { name: "C/C++ — 4⭐", issuer: "HackerRank", year: "2026", icon: "⚡", color: "#00EA64" },
  { name: "Google Data Analytics", issuer: "Coursera", year: "2026", icon: "📊", color: "#4285F4" },
  { name: "Blockchain & Applications", issuer: "NPTEL, IIT Kharagpur", year: "2024", icon: "⛓️", color: "#FF6B35" },
  { name: "Web Development CSS3 & HTML5", issuer: "Coincent via WorInWell", year: "2024", icon: "🌐", color: "#E44D26" },
  { name: "IEEE NetCrypt 2026 — Paper Presentation", issuer: "NetCrypt International Conference, IEEE", year: "Oct 2026", icon: "🔬", color: "#0076C0" },
  { name: "HackFed Hackathon — Smart Travel Tracker", issuer: "Gautam Buddha University", year: "2024", icon: "🏅", color: "#F39C12" },
  { name: "Tally Prime & ERP 9 — Advanced Diploma", issuer: "Star Computer Institute", year: "2022", icon: "💹", color: "#0B6E4F" },
];