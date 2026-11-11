import { SITE_URL } from "@/lib/constants";

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

export type Project = {
  title: string;
  category: string;
  description: string;
  contributions: string[];
  technologies: string[];
  featured: boolean;
  href?: string;
  links?: { label: string; href: string }[];
};

export type Achievement = {
  value: string;
  label: string;
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
  title: "Full Stack Developer | Frontend Engineer",
  headline: "Full Stack Developer building scalable digital experiences.",
  tagline:
    "I build high-performance web applications, scalable backend systems, and intuitive user experiences. Focused on React, Next.js, Node.js, and cloud technologies.",
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
    "React & Next.js Specialist",
    "Full Stack Development",
    "Chennai, India",
  ],
  about: {
    paragraphs: [
      "I'm a Full Stack Developer with 3+ years of experience building and scaling modern web applications using React.js, Next.js, Node.js, and Nest.js.",
      "I specialize in crafting responsive, high-performance interfaces, designing scalable architectures, developing RESTful APIs, and optimizing database performance across production systems.",
      "My work spans large-scale educational technology platforms, multi-tenant applications, AWS infrastructure, and CI/CD pipelines — collaborating closely with product, QA, and design teams while mentoring junior developers.",
    ],
    focus: [
      "Frontend engineering with React.js and Next.js",
      "Backend systems with Node.js and Nest.js",
      "REST API design and database optimization",
      "Multi-tenant application architecture",
      "AWS infrastructure and deployment",
      "Cross-functional collaboration and mentoring",
    ],
  },
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
        "Built 25+ reusable React.js components and custom hooks.",
        "Reduced page load time by 30% and improved Lighthouse scores by 35%, from 4 seconds to under 2.5 seconds.",
        "Designed and maintained REST APIs using Node.js, Nest.js, and Express.js.",
        "Maintained 99.9% uptime across production services.",
        "Optimized MongoDB and MySQL schemas and queries, improving database and API efficiency by 20%.",
        "Contributed to multi-tenant architecture supporting 500+ organizations and 50,000+ active users.",
        "Collaborated with QA, product, and design teams to improve release stability.",
        "Mentored 5+ junior developers on React, Git workflows, code reviews, and clean coding practices.",
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
        "Built and maintained React.js applications with a focus on responsive UI and reusable components.",
        "Adopted TypeScript to improve type safety, maintainability, and code quality.",
        "Contributed to REST API development using Node.js and Express.js.",
        "Mentored junior interns on frontend fundamentals, Git workflows, and collaborative development practices.",
      ],
      technologies: ["React.js", "TypeScript", "Node.js", "REST APIs", "Git"],
    },
  ] satisfies Experience[],
  skills: [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript ES6+",
        "TypeScript",
        "Redux Toolkit",
        "Context API",
        "Zustand",
        "Tailwind CSS",
        "Material UI",
        "Shadcn UI",
        "HTML5",
        "CSS3",
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
        "Sequelize",
        "Prisma",
      ],
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "AWS RDS"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS EC2",
        "AWS RDS",
        "AWS CodeBuild",
        "AWS CodePipeline",
        "AWS CodeDeploy",
        "Docker",
        "Kubernetes",
        "Nginx",
        "CI/CD",
      ],
    },
    {
      category: "Authentication & Integrations",
      skills: [
        "AWS Cognito",
        "JWT",
        "NextAuth",
        "Firebase Cloud Messaging",
        "CC Avenue",
      ],
    },
    {
      category: "Tools & Practices",
      skills: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Jira",
        "ClickUp",
        "Agile/Scrum",
        "MVC",
        "Microservices",
        "Multi-Tenant Architecture",
      ],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: "TopAll B2B Platform",
      category: "Educational Technology | B2B SaaS",
      description:
        "A scalable educational platform built for schools and institutions to manage examinations, assignments, student performance, and academic analytics.",
      contributions: [
        "Led frontend development for a platform serving 400+ institutes and 50,000+ students.",
        "Improved page loading and engagement by 40% through performance optimization and code splitting.",
        "Developed real-time analytics dashboards for student performance tracking.",
        "Collaborated on REST API and database optimization, improving data-fetching speed by 30%.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Material UI",
        "Node.js",
        "Nest.js",
        "AWS RDS",
        "MySQL",
      ],
      featured: true,
    },
    {
      title: "TopAll B2C Platform",
      category: "EdTech | Learning Platform",
      description:
        "A learning platform for NEET and JEE aspirants with online examinations, personalized study resources, AI-powered study plans, and progress tracking.",
      contributions: [
        "Developed features for a platform supporting 100K+ active users.",
        "Integrated an AI chatbot for student support, increasing engagement by 25%.",
        "Implemented CC Avenue payment and subscription workflows.",
        "Developed Firebase push notification functionality for study reminders and progress updates.",
      ],
      technologies: [
        "Next.js",
        "Redux",
        "Nest.js",
        "MySQL",
        "MongoDB",
        "CC Avenue",
        "Firebase",
      ],
      featured: true,
    },
    {
      title: "College Selection Platform",
      category: "Education | Web Application",
      description:
        "A responsive college guidance platform that helps students explore and select colleges through dynamic search and advanced filtering.",
      contributions: [
        "Developed reusable UI components.",
        "Implemented dynamic search and filtering.",
        "Improved user experience and engagement by 25%.",
        "Improved SEO and page load performance using Next.js server-side rendering.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "REST APIs",
      ],
      featured: true,
    },
    {
      title: "Netflix Streaming App Clone",
      category: "Personal Project",
      description:
        "A streaming interface inspired by Netflix, featuring content browsing powered by the TMDB API, Firebase authentication, and Redux Toolkit state management.",
      contributions: [
        "Built a responsive streaming UI with React and Redux Toolkit.",
        "Integrated Firebase Authentication for user management.",
      ],
      technologies: ["React", "JavaScript", "Firebase", "Redux Toolkit"],
      featured: false,
      links: [
        {
          label: "Live Demo",
          href: "https://netflix-clone01.vercel.app",
        },
      ],
    },
    {
      title: "eCommerce Application",
      category: "Personal Project",
      description:
        "An eCommerce application for managing product orders, sales, and inventory with online payment integration.",
      contributions: [
        "Developed product catalog, cart, and order management flows.",
        "Integrated Firebase for backend services and authentication.",
      ],
      technologies: ["React", "JavaScript", "Firebase", "Material UI"],
      featured: false,
      links: [
        {
          label: "GitHub",
          href: "https://github.com/hari-str/sportyfit-shoe-shop",
        },
      ],
    },
  ] satisfies Project[],
  achievements: [
    { value: "3+", label: "Years Experience" },
    { value: "25+", label: "Reusable React Components" },
    { value: "500+", label: "Organizations Supported" },
    { value: "50K+", label: "Active Users" },
    { value: "99.9%", label: "Production Uptime" },
    { value: "30%", label: "Page Load Improvement" },
    { value: "5+", label: "Developers Mentored" },
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
    heading: "Have an interesting project in mind?",
    description:
      "I'm always interested in building meaningful products, solving challenging engineering problems, and connecting with developers and teams.",
  },
};

export type Portfolio = typeof portfolio;
