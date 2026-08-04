export const userData = {
  name: "Bhargava Phani Sriram Mudrageda",
  shortName: "Sriram M.",
  title: "Software Engineer",
  roles: ["Full-Stack Developer", "DevOps Engineer", "AI/ML Builder", "Java Developer"],
  phone: "+91 7780513556",
  email: "srirammudrageda0@gmail.com",
  github: "github.com/Sriram77805",
  linkedin: "linkedin.com/in/sriram-mudrageda77805/",
  website: "sriram-mudrageda-portfolio.vercel.app",
  about: "Software Engineer with experience in full-stack development, cloud-native applications, and DevOps practices. Proficient in Java, JavaScript, React.js, Node.js, and Express.js. Experienced in developing scalable applications, RESTful APIs, and microservices-based systems. Hands-on with Docker, Kubernetes, CI/CD pipelines, and cloud platforms.",
  stats: [
    { value: "8", label: "Projects Built" },
    { value: "20+", label: "Technologies" },
    { value: "1", label: "IEEE Publication" },
    { value: "8.5", label: "GPA / 10" },
  ],
};

export const skillsData = [
  { name: 'React.js',      category: 'Frontend',     devicon: 'react' },
  { name: 'Node.js',       category: 'Backend',      devicon: 'nodejs' },
  { name: 'Express.js',    category: 'Backend',      devicon: 'express' },
  { name: 'Java',          category: 'Language',     devicon: 'java' },
  { name: 'JavaScript',    category: 'Language',     devicon: 'javascript' },
  { name: 'Python',        category: 'Language',     devicon: 'python' },
  { name: 'C',             category: 'Language',     devicon: 'c' },
  { name: 'MongoDB',       category: 'Database',     devicon: 'mongodb' },
  { name: 'MySQL',         category: 'Database',     devicon: 'mysql' },
  { name: 'Tailwind CSS',  category: 'Frontend',     devicon: 'tailwindcss' },
  { name: 'Docker',        category: 'DevOps',       devicon: 'docker' },
  { name: 'Kubernetes',    category: 'DevOps',       devicon: 'kubernetes' },
  { name: 'GitHub Actions',category: 'DevOps',       devicon: 'githubactions' },
  { name: 'ArgoCD',        category: 'DevOps',       devicon: 'argocd' },
  { name: 'Helm',          category: 'DevOps',       devicon: 'helm' },
  { name: 'Prometheus',    category: 'Monitoring',   devicon: 'prometheus' },
  { name: 'Grafana',       category: 'Monitoring',   devicon: 'grafana' },
  { name: 'Git',           category: 'Tools',        devicon: 'git' },
  { name: 'AWS',           category: 'Cloud',        devicon: 'amazonwebservices' },
  { name: 'TensorFlow',    category: 'AI/ML',        devicon: 'tensorflow' },
  { name: 'Scikit-learn',  category: 'AI/ML',        devicon: 'scikitlearn' },
  { name: 'Python',        category: 'AI/ML',        devicon: 'python' },
];

export const educationData = [
  {
    period: "Expected May 2026",
    degree: "B.Tech – Computer Science & Engineering (AI)",
    institution: "Amrita Vishwa Vidyapeetham",
    detail: "GPA: 8.5 / 10.0",
  },
  {
    period: "June 2022",
    degree: "Intermediate",
    institution: "Narayana Jr. College, Vijayawada",
    detail: "",
  },
];

export const certificationsData = [
  { name: "Getting Started With Amazon AWS", date: "Aug 2024" },
  { name: "Getting Started with DevOps on AWS", date: "Aug 2024" },
];

export const projectsData = [
  {
    type: "devops",
    name: "Cloud Native CI/CD Platform",
    tools: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions', 'Prometheus', 'Grafana', 'MERN'],
    description: "Built and deployed a containerized full-stack application on Kubernetes using Helm charts. Automated the full CI/CD pipeline with GitHub Actions and GitOps-based continuous deployment via ArgoCD. Integrated Prometheus + Grafana for real-time observability.",
    date: "Feb 2026",
    githubLink: "https://github.com/Sriram77805",
  },
  {
    type: "fullstack",
    name: "ChatBridge – Real-Time MERN Chat App",
    tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JWT'],
    description: "Full-stack real-time chat system with instant messaging, typing indicators, and online/offline presence via Socket.io. Implemented JWT auth, encrypted password storage, and optimised MongoDB schemas for one-to-one and group chats.",
    date: "Aug 2025",
    githubLink: "https://github.com/Sriram77805/ChatBridge",
  },
  {
    type: "systems",
    name: "QueueCTL – CLI Background Job Queue",
    tools: ['Java', 'Maven', 'SQLite', 'Multithreading', 'REPL', 'Exponential Backoff', 'DLQ'],
    description: "A CLI-driven background job queue system in Java with a persistent SQLite backend. Features a REPL interface, multi-threaded workers, exponential-backoff retry, and a dead-letter queue for failed jobs.",
    date: "Jun 2025",
    githubLink: "https://github.com/Sriram77805",
  },
  {
    type: "ai",
    name: "RAG-FinanceBot – Financial Advisory AI",
    tools: ['Python', 'RAG', 'LangChain', 'LLM', 'Vector DB'],
    description: "Retrieval-Augmented Generation assistant grounded in financial documents and market data, delivering personalised, context-aware financial guidance instead of generic chatbot answers.",
    date: "2025",
    githubLink: "https://github.com/Sriram77805/RAG-FinanceBot--Personalized-Financial-Advisory-Assistant",
  },
  {
    type: "fullstack",
    name: "Rapid-Type – Typing Speed Trainer",
    tools: ['HTML', 'CSS', 'JavaScript'],
    description: "Browser-based typing speed trainer tracking WPM and accuracy in real time, with instant per-character feedback. Zero dependencies, sub-second cold start.",
    date: "2025",
    githubLink: "https://github.com/Sriram77805/Rapid-Type",
  },
  {
    type: "ai",
    name: "Brain Tumor Segmentation (MRI)",
    tools: ['U-Net', 'Python', 'Hausdorff Distance Loss', 'Dice Score', 'NumPy'],
    description: "U-Net deep learning model for automated brain tumor segmentation with a Hausdorff Distance-driven loss function combined with Dice loss to sharpen boundary precision in MRI scans.",
    date: "Jul 2025",
    githubLink: "https://github.com/Sriram77805/Optimized_Brain_Tumor_Segmentation_in_MRI_Scans_using_U-Net_and_Hausdorff_Distance_Minimization",
  },
  {
    type: "ai",
    name: "Diabetic Retinopathy Detection",
    tools: ['CNN', 'Deep Learning', 'Python', 'TensorFlow/Keras'],
    description: "Deep learning pipeline detecting diabetic retinopathy from retinal fundus images and classifying its severity stage, enabling earlier clinical intervention.",
    date: "2025",
    githubLink: "https://github.com/Sriram77805/Early_Detection-and-Severity_Classification_of_Diabetic_Retinopathy_using_Deep_Learning",
  },
  {
    type: "ai",
    name: "Heart Disease Prediction (Ensemble)",
    tools: ['Random Forest', 'XGBoost', 'Cuckoo Search', 'Scikit-learn', 'Python'],
    description: "Cuckoo Search-optimised ensemble (Random Forest + Linear Regression) for heart disease prediction. Includes data preprocessing, feature selection pipeline, and rigorous hyperparameter tuning.",
    date: "Jun 2025",
    githubLink: "https://github.com/Sriram77805/heart-disease-prediction",
  },
];

export const publicationData = [
  {
    name: "Credit Card Fraud Identification with ANN and LSTM Models",
    tools: ['ANN', 'LSTM', 'SMOTE', 'Python', 'TensorFlow', 'Keras'],
    date: "May 2025",
    publisher: "IEEE",
    doi: "10.1109/AIDE64228.2025.10986910",
    description: "Deep learning fraud detection system using ANN + LSTM achieving 98% accuracy and 97.72% F1-score after extensive data imbalance handling with SMOTE and preprocessing pipelines.",
  },
];
