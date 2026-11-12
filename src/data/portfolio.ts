import { SITE_URL } from "@/lib/constants";
import { projects } from "@/data/projects";

export type SocialLink = {
  name: string;
  url: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  href?: string;
  logoUrl: string;
  achievements: string[];
  technologies?: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type Achievement = {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
};

export type Education = {
  degree: string;
  school: string;
  start: string;
  end: string;
  href?: string;
  logoUrl: string;
};

export const portfolio = {
  name: "Hariharan Ganesan",
  shortName: "Hariharan",
  initials: "HG",
  title: "Full Stack Engineer | Frontend Specialist | Product Builder",
  roles: [
    "FULL STACK ENGINEER",
    "FRONTEND SPECIALIST",
    "PRODUCT BUILDER",
  ],
  headline:
    "Engineering scalable products. Crafting exceptional digital experiences.",
  tagline:
    "I build high-performance web applications, scalable backend systems, and intelligent digital experiences using modern frontend, backend, and cloud technologies.",
  introduction:
    "I'm a Full Stack Developer specializing in React, Next.js, Node.js, and modern cloud technologies. I build scalable applications, high-performance interfaces, and intelligent product experiences that solve real-world problems.",
  location: "Chennai, Tamil Nadu, India",
  locationShort: "Chennai, India",
  email: "hariharan5235@gmail.com",
  phone: "+91 9952352272",
  phoneTel: "+919952352272",
  url: SITE_URL,
  avatarUrl: "/profile.jpg",
  resumeUrl: "/resume",
  heroHighlights: [
    "3+ Years Experience",
    "React & Next.js",
    "Full Stack Development",
    "AWS & Cloud Infrastructure",
  ],
  about: {
    paragraphs: [
      "With 3+ years of experience building production software, I focus on shipping maintainable systems that perform under real user load — from responsive interfaces to multi-tenant backends and cloud deployments.",
      "At VVT Solutions, I've contributed to large-scale educational technology platforms: reusable frontend architecture, REST APIs, database optimization, AWS infrastructure, and CI/CD pipelines used by hundreds of organizations.",
      "I enjoy collaborating with product, QA, and design teams, mentoring junior developers, and turning complex requirements into clean, scalable engineering outcomes.",
    ],
    philosophy:
      "I believe great software is not just about writing code. It's about solving the right problems, designing maintainable systems, and delivering experiences that scale.",
    focus: [
      "Production-ready application development",
      "Frontend architecture and reusable components",
      "Backend API development",
      "Database and query optimization",
      "Multi-tenant application architecture",
      "AWS deployment and CI/CD",
      "Collaboration and mentoring",
    ],
  },
  capabilities: [
    {
      id: "01",
      title: "Frontend Engineering",
      description:
        "High-performance interfaces with reusable component systems and modern React architecture.",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Zustand",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      id: "02",
      title: "Backend Engineering",
      description:
        "Reliable APIs and server-side systems designed for scale, clarity, and maintainability.",
      items: [
        "Node.js",
        "Nest.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "Prisma",
        "Sequelize",
      ],
    },
    {
      id: "03",
      title: "Cloud & Infrastructure",
      description:
        "Deployment pipelines and cloud services that keep production systems resilient.",
      items: [
        "AWS EC2",
        "AWS RDS",
        "CodeBuild",
        "CodePipeline",
        "CodeDeploy",
        "Docker",
        "Kubernetes",
        "Nginx",
        "CI/CD",
      ],
    },
    {
      id: "04",
      title: "AI-Powered Product Development",
      description:
        "Application-level AI integrations that improve learning workflows and student support.",
      items: [
        "AI-powered study plans",
        "Chatbot integration",
        "Intelligent EdTech experiences",
        "Product workflow AI features",
      ],
    },
  ] satisfies Capability[],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/hari-str",
      label: "GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hariharanganesan99/",
      label: "LinkedIn",
    },
    {
      name: "Email",
      url: "mailto:hariharan5235@gmail.com",
      label: "Email",
    },
  ] satisfies SocialLink[],
  experience: [
    {
      company: "VVT Solutions Private Limited",
      role: "Software Developer Engineer (Full Stack)",
      location: "Chennai, India",
      start: "February 2023",
      end: "Present",
      href: "https://vvtsolutions.in",
      logoUrl: "/vvts.png",
      achievements: [
        "Developed 25+ reusable React components and custom hooks.",
        "Improved page load time by 30%.",
        "Improved Lighthouse scores by 35%, from approximately 4 seconds to under 2.5 seconds.",
        "Developed REST APIs using Node.js, Nest.js, and Express.js.",
        "Maintained 99.9% uptime across production services.",
        "Optimized MongoDB and MySQL schemas and queries by 20%.",
        "Contributed to multi-tenant architecture supporting 500+ organizations and 50,000+ active users.",
        "Mentored 5+ junior developers.",
        "Collaborated across product, QA, and engineering teams.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Nest.js",
        "MongoDB",
        "MySQL",
        "AWS",
      ],
    },
    {
      company: "Kitkat Software Technologies",
      role: "Software Developer and Mentor (Intern)",
      location: "Coimbatore, India",
      start: "September 2022",
      end: "February 2023",
      href: "https://kitkatsoftwaretechnologies.com",
      logoUrl: "/kitkat-soft-logo.png",
      achievements: [
        "Built and maintained React.js applications with reusable, responsive UI components.",
        "Used TypeScript to improve code quality and maintainability.",
        "Contributed to REST API development with Node.js and Express.js.",
        "Collaborated using Git and mentored junior interns on frontend fundamentals.",
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "Git"],
    },
  ] satisfies Experience[],
  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Redux Toolkit",
        "Context API",
        "Zustand",
        "Tailwind CSS",
        "Material UI",
        "Shadcn UI",
      ],
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Nest.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "Prisma",
        "Sequelize",
      ],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "AWS RDS"],
    },
    {
      category: "Cloud",
      skills: [
        "AWS EC2",
        "AWS RDS",
        "CodeBuild",
        "CodePipeline",
        "CodeDeploy",
        "Docker",
        "Kubernetes",
        "Nginx",
      ],
    },
    {
      category: "Authentication",
      skills: ["AWS Cognito", "JWT", "NextAuth"],
    },
    {
      category: "Integrations",
      skills: ["Firebase Cloud Messaging", "CC Avenue"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Bitbucket", "Jira", "ClickUp"],
    },
  ] satisfies SkillGroup[],
  projects,
  aiWork: {
    title: "Building Intelligent Product Experiences",
    description:
      "Application-level AI features integrated into educational products — focused on student support, personalization, and learning workflows.",
    items: [
      {
        title: "AI-powered study plans",
        description:
          "Contributed to personalized study plan experiences in the TopAll B2C platform for NEET and JEE aspirants.",
      },
      {
        title: "AI chatbot for student support",
        description:
          "Integrated a chatbot experience that improved student engagement by 25% through faster support interactions.",
      },
      {
        title: "Intelligent EdTech workflows",
        description:
          "Helped weave AI-assisted capabilities into existing assessment, progress tracking, and learning product flows.",
      },
    ],
  },
  achievements: [
    { value: "3+", label: "Years Experience", numeric: 3, suffix: "+" },
    {
      value: "25+",
      label: "Reusable Components",
      numeric: 25,
      suffix: "+",
    },
    {
      value: "500+",
      label: "Organizations Supported",
      numeric: 500,
      suffix: "+",
    },
    {
      value: "50K+",
      label: "Active Users",
      numeric: 50,
      suffix: "K+",
    },
    { value: "99.9%", label: "Production Uptime" },
    {
      value: "30%",
      label: "Page Load Improvement",
      numeric: 30,
      suffix: "%",
    },
    {
      value: "5+",
      label: "Developers Mentored",
      numeric: 5,
      suffix: "+",
    },
  ] satisfies Achievement[],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Hindusthan College of Engineering and Technology",
      start: "2020",
      end: "2022",
      href: "https://hicet.ac.in",
      logoUrl: "/hicet-logo.jpg",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "JJ College of Arts & Science",
      start: "2017",
      end: "2020",
      href: "https://www.jjcoll.in",
      logoUrl: "/jj-logo.jpg",
    },
  ] satisfies Education[],
  contact: {
    heading: "Let's build something meaningful.",
    description:
      "I'm interested in working on challenging products, scalable applications, and innovative engineering solutions.",
  },
};

export type Portfolio = typeof portfolio;
