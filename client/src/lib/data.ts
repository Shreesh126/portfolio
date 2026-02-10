import { Code2, Globe, Database, Cpu, Cloud, Terminal, Layers, ShieldCheck, Box, GraduationCap, Award, Server } from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    name: "Shrish Vinayak Hegde",
    title: "Full Stack Developer | AI Systems & Cloud Engineer",
    tagline: "Building scalable full-stack platforms, AI systems, and cloud-native applications.",
    techTicker: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "Next.js", "TypeScript", "TensorFlow", "Kubernetes"]
  },
  about: {
    summary: "I am a passionate Full Stack Developer with a deep specialization in AI and Cloud Architecture. My expertise lies in building robust microservices, deploying scalable cloud solutions, and integrating cutting-edge AI models into practical applications. I bridge the gap between complex backend logic and intuitive frontend experiences."
  },
  skills: [
    {
      category: "Languages",
      icon: Terminal,
      items: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      category: "Frontend",
      icon: Globe,
      items: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Node.js", "Express", "FastAPI", "Flask", "GraphQL", "REST API", "WebSockets"]
    },
    {
      category: "AI & ML",
      icon: Cpu,
      items: ["NLP", "Machine Learning", "Deep Learning", "LangChain", "RAG", "Pandas", "NumPy"]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS (S3, Lambda, DynamoDB, EC2, RDS)", "Cloudflare", "Docker", "Kubernetes", "Kafka", "Microservices"]
    }
  ],
  experience: [
    {
      role: "Junior Web Developer",
      company: "Wow Skin Science",
      period: "Jul 2025 – Present",
      description: "Building scalable CMS and microservices architecture.",
      highlights: [
        "Built a CMS using Strapi framework integrated with React.js and Next.js.",
        "Managed and optimized backend servers handling high-traffic loads using AWS EC2, S3, Lambda, and DynamoDB.",
        "Implemented Cloudflare caching and CDN strategies to improve load times.",
        "Integrated AI-powered chatbot features and CI/CD pipelines for automated testing/deployment.",
        "Optimized microservice performance and monitored health via Google Analytics/Tag Manager."
      ]
    }
  ],
  projects: [
    {
      title: "Device Tracking Platform",
      category: "Full Stack",
      description: "Real-time full-stack web application for monitoring live locations and device status.",
      tech: ["Node.js", "MongoDB", "React", "WebSockets", "Google Maps API"],
      link: "https://github.com/Shreesh126",
      icon: Globe,
      features: [
        "Real-time tracking with WebSockets",
        "Secure backend with Node.js & MongoDB",
        "Interactive frontend dashboard"
      ]
    },
    {
      title: "AI Resume Screening System",
      category: "AI/ML",
      description: "AI-powered candidate evaluation platform using NLP to extract skills and rank profiles.",
      tech: ["Python", "MongoDB", "NLP", "AI", "FastAPI"],
      link: "https://github.com/Shreesh126",
      icon: ShieldCheck,
      features: [
        "Semantic matching engine",
        "Automated qualification extraction",
        "Resume ranking against job descriptions"
      ]
    },
    {
      title: "Blockchain Land Registry",
      category: "Blockchain",
      description: "Secure land registration system using Flask and Ethereum blockchain for tamper-proof records.",
      tech: ["Flask", "Python", "Ethereum", "Smart Contracts", "QR Codes"],
      link: "https://github.com/Shreesh126",
      icon: Box,
      features: [
        "Tamper-proof property records",
        "QR code generation for ownership verification",
        "Smart contracts for transparency"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Information Science",
      school: "Sri Siddhartha Institute of Technology, Tumakuru",
      year: "2021 – 2025",
      details: "CGPA: 7.48 / 10.00"
    },
    {
      degree: "Class 12",
      school: "Poornaprajna PU College, Udupi",
      year: "2019 – 2021",
      details: "Percentage: 90.60%"
    }
  ],
  certifications: [
    {
      name: "Privacy and Security in Online Social Media",
      issuer: "NPTEL (Silver Badge)",
      icon: Award
    },
    {
      name: "Design and Implementation of Human–Computer Interfaces",
      issuer: "NPTEL",
      icon: Award
    }
  ]
};
