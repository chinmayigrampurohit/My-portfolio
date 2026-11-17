export interface SkillItem {
  name: string;
  category: "Programming" | "Web Development" | "Tools" | "Professional Skills";
  level?: string;
  iconName?: string;
  color?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
  highlights: string[];
  badge?: string;
  metrics?: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  recognition: string;
  organization: string;
  summary: string;
  details: string[];
  icon: "trophy" | "mic";
  accentColor: "gold" | "purple";
  badgeText: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: "github" | "linkedin" | "mail";
}

export const PERSONAL_INFO = {
  name: "Chinmayi Grampurohit",
  title: "Aspiring Software Developer",
  college: "Bangalore Institute of Technology (BIT)",
  heroTagline: "Turning Ideas Into Intelligent Solutions.",
  heroHeading: "Hi, I'm Chinmayi.",
  heroSupportingText:
    "Passionate about technology, creative problem-solving, and building solutions that make a real-world difference.",
  shortIntro:
    "I'm an aspiring Software Developer passionate about technology, innovation, and solving real-world problems. I enjoy exploring new technologies, building meaningful projects, and transforming ideas into practical solutions.",
  aboutMe: {
    lead: "I'm Chinmayi Grampurohit, currently pursuing my studies at Bangalore Institute of Technology. I am an aspiring Software Developer who believes that technology becomes powerful when it solves real-world problems.",
    body1:
      "I enjoy coding, exploring emerging technologies, experimenting with innovative ideas, and developing solutions that create meaningful impact.",
    body2:
      "Beyond technology, I have a strong passion for communication, leadership, and connecting with people. I had the incredible opportunity to host the first-ever KVS podcast, featuring a KVS IAS Commissioner, an experience that strengthened my public-speaking, leadership, and communication abilities.",
    body3:
      "I am also proud to have secured First Prize at URSC (ISRO). This achievement reflects my curiosity, dedication, and enthusiasm for learning and innovation.",
    conclusion:
      "I believe in continuous learning, creative thinking, and making every opportunity count. My goal is to grow as a software developer while building technology that makes a difference.",
  },
  contact: {
    email: "chinmayigrampurohit302008@gmail.com",
    github: "https://github.com/chinmayigrampurohit",
    linkedin: "https://www.linkedin.com/in/chinmayi-grampurohit-67360543b/",
    location: "Bangalore, India",
    availability: "Open to Internships, Projects & Collaborative Opportunities",
  },
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ursc-isro",
    title: "First Prize – URSC (ISRO)",
    recognition: "First Prize",
    organization: "URSC – U R Rao Satellite Centre, ISRO",
    summary:
      "Secured First Prize at U R Rao Satellite Centre (ISRO). This achievement reflects curiosity, scientific dedication, problem-solving capability, and enthusiasm for learning and high-impact innovation.",
    details: [
      "Awarded First Prize by U R Rao Satellite Centre (ISRO)",
      "Excellence in technological innovation and creative inquiry",
      "Demonstrated analytical rigor and dedication to scientific problem-solving",
      "Featured milestone honoring curiosity and high technical standards",
    ],
    icon: "trophy",
    accentColor: "gold",
    badgeText: "ISRO Recognition",
  },
  {
    id: "kvs-podcast",
    title: "Host – First-Ever KVS Podcast",
    recognition: "Official Host",
    organization: "Kendriya Vidyalaya Sangathan (KVS)",
    summary:
      "Selected to host the historic first-ever official KVS podcast, featuring a KVS IAS Commissioner. An inspiring media and leadership achievement that strengthened public-speaking, strategic communication, and executive interpersonal abilities.",
    details: [
      "Pioneered and hosted the inaugural first-ever official KVS podcast episode",
      "Conducted a high-level interview featuring a distinguished KVS IAS Commissioner",
      "Demonstrated articulate public-speaking, media presence, and conversational leadership",
      "Bridged student voice and leadership through impactful communication",
    ],
    icon: "mic",
    accentColor: "purple",
    badgeText: "Media & Leadership",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming",
    description: "Core languages for algorithmic logic, computational problem-solving, and robust software architecture.",
    gradient: "from-purple-500/20 via-indigo-500/20 to-purple-500/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    skills: [
      { name: "Python", category: "Programming" },
      { name: "C", category: "Programming" },
      { name: "C++", category: "Programming" },
    ],
  },
  {
    category: "Web Development",
    description: "Modern frontend and full-stack web technologies for building responsive, accessible, and high-performance applications.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    skills: [
      { name: "HTML", category: "Web Development" },
      { name: "CSS", category: "Web Development" },
      { name: "JavaScript", category: "Web Development" },
      { name: "TypeScript", category: "Web Development" },
      { name: "React.js", category: "Web Development" },
      { name: "Next.js", category: "Web Development" },
      { name: "Tailwind CSS", category: "Web Development" },
    ],
  },
  {
    category: "Tools",
    description: "Essential version control and developer workflows for team collaboration and codebase management.",
    gradient: "from-emerald-500/20 via-teal-500/20 to-emerald-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
    ],
  },
  {
    category: "Professional Skills",
    description: "Essential leadership, communication, and interpersonal competencies cultivated through podcasts, competitions, and collaborative engineering.",
    gradient: "from-pink-500/20 via-rose-500/20 to-pink-500/10",
    border: "border-pink-500/30",
    iconColor: "text-pink-400",
    skills: [
      { name: "Problem Solving", category: "Professional Skills" },
      { name: "Communication", category: "Professional Skills" },
      { name: "Public Speaking", category: "Professional Skills" },
      { name: "Leadership", category: "Professional Skills" },
      { name: "Team Collaboration", category: "Professional Skills" },
      { name: "Creative Thinking", category: "Professional Skills" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "multimodal-attendance-agent",
    title: "Multimodal Attendance & Engagement Agent",
    subtitle: "Real-Time Edge AI Biometric Attendance & Multimodal Attention Telemetry",
    description:
      "An advanced real-time edge AI application that integrates facial recognition attendance logging with multimodal engagement analytics (body posture, gaze direction, head cadence, and vocal participation) for classroom and enterprise meeting spaces. Built with privacy-first edge design that purges transient frames within ≤33ms and hashes biometric vectors with AES-256-GCM. Features an automated 60-second synchronized JSON payload inspector and Gemini 2.0 Flash for automated teaching suggestions and behavioral analysis.",
    tags: [
      "Python",
      "Flask",
      "OpenCV",
      "Google Gemini 2.0 Flash",
      "NumPy",
      "SciPy",
      "Node.js",
      "Edge CV",
      "Voice VAD",
      "AES-256-GCM",
    ],
    githubUrl:
      "https://github.com/chinmayigrampurohit/Multimodal-Attendance-Engagement_-Agent",
    isFeatured: true,
    badge: "Featured Flagship Project",
    highlights: [
      "Biometric facial recognition logging: Present, Tardy, Absent, Departed",
      "Multimodal Signal Fusion: Gaze (35%), Body Posture (25%), Vocal VAD (25%), Kinematic Head Cadence (15%)",
      "Privacy-by-Design: zero raw media saved, GPU memory wiped in ≤33ms, pseudonymized identifiers",
      "Interactive 24-seat lecture matrix, 60s JSON telemetry stream, and automated CSV ledger",
      "Google Gemini 2.0 Flash integration for dynamic teacher interventions and session analysis",
    ],
    metrics: [
      { label: "Gaze Weight", value: "35%" },
      { label: "Posture Weight", value: "25%" },
      { label: "Vocal VAD", value: "25%" },
      { label: "Purge Speed", value: "≤ 33 ms" },
    ],
  },
  {
    id: "algorithmic-solutions",
    title: "Algorithmic Problem-Solving & Data Structures",
    subtitle: "High-Performance Computing & Computational Logic in C++ and Python",
    description:
      "A comprehensive repository of algorithmic implementations and optimization patterns focusing on efficient space-time complexity, graph traversals, dynamic programming, and data structures engineered to solve complex computational problems.",
    tags: ["C++", "Python", "Data Structures", "Algorithms", "Optimization"],
    githubUrl: "https://github.com/chinmayigrampurohit",
    isFeatured: false,
    badge: "Core Engineering",
    highlights: [
      "Time and space-optimized algorithmic implementations",
      "Graph traversals, tree balancing, and dynamic programming",
      "Modular, clean code following rigorous software engineering standards",
    ],
  },
  {
    id: "modern-web-ecosystem",
    title: "Responsive Full-Stack Web Architecture",
    subtitle: "Interactive, Accessible, High-Performance Web Applications",
    description:
      "Production-ready modern web applications leveraging Next.js App Router, TypeScript, and Tailwind CSS. Focuses on component reusability, fluid animations, accessible semantic HTML, and responsive UI design.",
    tags: ["TypeScript", "Next.js", "React.js", "Tailwind CSS", "UI/UX"],
    githubUrl: "https://github.com/chinmayigrampurohit",
    isFeatured: false,
    badge: "Web Systems",
    highlights: [
      "Server and client components with Next.js App Router",
      "Strict TypeScript typing and component contracts",
      "Fluid responsive styling and glassmorphism UI micro-interactions",
    ],
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
