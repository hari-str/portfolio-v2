export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectCaseStudy = {
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  contributions: string[];
  challenges: string[];
  outcomes: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  contributions: string[];
  technologies: string[];
  featured: boolean;
  metrics?: ProjectMetric[];
  accent: "indigo" | "cyan" | "zinc";
  href?: string;
  links?: { label: string; href: string }[];
  caseStudy: ProjectCaseStudy;
};

export const projects: Project[] = [
  {
    slug: "topall-b2b",
    title: "TopAll B2B Platform",
    category: "B2B SaaS / Educational Technology",
    description:
      "A scalable educational platform for institutions to manage examinations, assignments, student performance, and academic analytics.",
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
    accent: "indigo",
    metrics: [
      { value: "400+", label: "Institutes" },
      { value: "50K+", label: "Students" },
      { value: "40%", label: "Engagement lift" },
      { value: "30%", label: "Faster data fetch" },
    ],
    caseStudy: {
      overview:
        "TopAll B2B is an institutional platform that helps schools and educational organizations run examinations, assignments, and academic analytics at scale.",
      problem:
        "Institutions needed a reliable multi-tenant system to manage assessments and student performance without fragmented tools or slow reporting experiences.",
      solution:
        "Built and evolved a React-based frontend with reusable components, analytics dashboards, and optimized API/data flows backed by Nest.js services and AWS RDS.",
      architecture:
        "A multi-tenant web application with a React frontend, Nest.js/Node.js APIs, and MySQL on AWS RDS. Emphasis on reusable UI, efficient data fetching, and production reliability across many organizations.",
      contributions: [
        "Led frontend development for experiences used by 400+ institutes and 50,000+ students.",
        "Improved page loading and engagement by 40% via performance work and code splitting.",
        "Built analytics dashboards for student performance tracking.",
        "Partnered on REST API and database optimization, improving data-fetching speed by 30%.",
      ],
      challenges: [
        "Keeping interfaces responsive under large institutional datasets.",
        "Maintaining reusable frontend patterns across multi-tenant product surfaces.",
        "Balancing feature velocity with production performance and stability.",
      ],
      outcomes: [
        "400+ institutes supported.",
        "50,000+ students served.",
        "30% improvement in data-fetching speed.",
        "40% improvement in page loading and engagement.",
      ],
    },
  },
  {
    slug: "topall-b2c",
    title: "TopAll B2C Platform",
    category: "B2C / AI-Powered EdTech",
    description:
      "An online learning platform for NEET and JEE aspirants with personalized learning experiences, online assessments, AI-powered study plans, and student progress tracking.",
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
    accent: "cyan",
    metrics: [
      { value: "100K+", label: "Active users" },
      { value: "AI", label: "Study plans" },
      { value: "25%", label: "Engagement lift" },
      { value: "Pay", label: "Subscriptions" },
    ],
    caseStudy: {
      overview:
        "TopAll B2C is a consumer learning platform for NEET and JEE aspirants, combining assessments, personalized study resources, and AI-assisted learning support.",
      problem:
        "Aspirants needed a unified product for practice, progress tracking, personalized guidance, and reliable payments — without fragmented student support.",
      solution:
        "Delivered Next.js product features spanning assessments, AI-powered study plans, chatbot support, subscription payments, and push notifications.",
      architecture:
        "A Next.js frontend integrated with Nest.js services, MySQL/MongoDB data stores, CC Avenue payment flows, and Firebase notifications. AI capabilities are applied at the product-experience layer for study planning and student support.",
      contributions: [
        "Built product features used by 100K+ active users.",
        "Integrated an AI chatbot for student support that increased engagement by 25%.",
        "Implemented CC Avenue payment and subscription workflows.",
        "Added Firebase push notifications for reminders and progress updates.",
      ],
      challenges: [
        "Supporting high concurrent consumer traffic with responsive UX.",
        "Integrating AI-assisted features into existing learning workflows without overcomplicating the product.",
        "Coordinating payments, notifications, and study experiences into a coherent student journey.",
      ],
      outcomes: [
        "100K+ active users supported.",
        "AI-powered study plans shipped in-product.",
        "AI chatbot integration improved engagement by 25%.",
        "Payment and subscription infrastructure delivered.",
      ],
    },
  },
  {
    slug: "college-selection",
    title: "College Selection Platform",
    category: "Education / Web Application",
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
    accent: "zinc",
    metrics: [
      { value: "SSR", label: "SEO-focused" },
      { value: "25%", label: "Engagement lift" },
      { value: "UI", label: "Reusable system" },
      { value: "Filter", label: "Advanced search" },
    ],
    caseStudy: {
      overview:
        "A college guidance web application that helps students discover and compare colleges with dynamic search and filtering.",
      problem:
        "Students needed a faster, clearer way to explore college options without clunky navigation or slow page experiences.",
      solution:
        "Built responsive interfaces with reusable components, advanced filtering, and Next.js SSR for SEO and performance.",
      architecture:
        "A React/Next.js TypeScript frontend consuming REST APIs, with emphasis on reusable UI, filtering UX, and server-side rendering for discoverability.",
      contributions: [
        "Developed reusable UI components.",
        "Implemented dynamic search and advanced filtering.",
        "Improved user experience and engagement by 25%.",
        "Improved SEO and load performance with Next.js SSR.",
      ],
      challenges: [
        "Designing filter interactions that remained clear on mobile.",
        "Improving SEO and perceived performance for content-heavy pages.",
      ],
      outcomes: [
        "Dynamic college search and filtering shipped.",
        "Responsive interfaces delivered.",
        "25% improvement in engagement.",
        "SEO and page load performance improved via SSR.",
      ],
    },
  },
  {
    slug: "netflix-clone",
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
    accent: "indigo",
    links: [
      {
        label: "Live Demo",
        href: "https://netflix-clone01.vercel.app",
      },
    ],
    caseStudy: {
      overview:
        "A personal streaming UI clone focused on modern frontend patterns, authentication, and remote content APIs.",
      problem:
        "Practice building a polished media browsing experience with auth and global state.",
      solution:
        "Implemented a React interface using TMDB content, Firebase Auth, and Redux Toolkit.",
      architecture:
        "Client-side React application with Firebase Authentication and Redux Toolkit state, consuming the TMDB API.",
      contributions: [
        "Built responsive streaming UI patterns.",
        "Integrated Firebase Authentication.",
      ],
      challenges: [
        "Structuring media browsing UI cleanly across breakpoints.",
      ],
      outcomes: [
        "Working demo available publicly.",
      ],
    },
  },
  {
    slug: "ecommerce-app",
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
    accent: "cyan",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hari-str/sportyfit-shoe-shop",
      },
    ],
    caseStudy: {
      overview:
        "A personal commerce project covering catalog, cart, inventory-oriented flows, and payment integration.",
      problem:
        "Explore end-to-end storefront UX with authentication and order management.",
      solution:
        "Built React + Material UI flows with Firebase-backed services.",
      architecture:
        "React frontend with Material UI and Firebase for authentication and backend services.",
      contributions: [
        "Developed catalog, cart, and order management flows.",
        "Integrated Firebase services and authentication.",
      ],
      challenges: [
        "Keeping commerce flows coherent across product and checkout states.",
      ],
      outcomes: [
        "Source available on GitHub.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getSecondaryProjects() {
  return projects.filter((project) => !project.featured);
}
