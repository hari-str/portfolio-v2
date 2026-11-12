import { portfolio } from "@/data/portfolio";
import { projects } from "@/data/projects";

export type AssistantQA = {
  id: string;
  question: string;
  keywords: string[];
  answer: string;
};

export const ASSISTANT_SUGGESTIONS = [
  "What is Hariharan's technical experience?",
  "Tell me about the TopAll B2B platform.",
  "What is his experience with AWS?",
  "What AI-powered features has he worked on?",
  "What are his strongest frontend skills?",
  "How can I contact him?",
] as const;

const vvt = portfolio.experience[0];
const kitkat = portfolio.experience[1];
const b2b = projects.find((p) => p.slug === "topall-b2b")!;
const b2c = projects.find((p) => p.slug === "topall-b2c")!;

export const ASSISTANT_KNOWLEDGE: AssistantQA[] = [
  {
    id: "experience",
    question: "What is Hariharan's technical experience?",
    keywords: [
      "experience",
      "background",
      "technical",
      "years",
      "career",
      "who",
      "about hari",
      "about him",
    ],
    answer: `${portfolio.name} is a Full Stack Engineer and Frontend Specialist with 3+ years of experience based in ${portfolio.locationShort}. He specializes in React, Next.js, Node.js, Nest.js, and cloud technologies. At ${vvt.company}, he builds production systems spanning frontend architecture, REST APIs, multi-tenant platforms, AWS infrastructure, and mentoring. Previously he interned at ${kitkat.company}, working with React, TypeScript, Node.js, and mentoring junior interns.`,
  },
  {
    id: "topall-b2b",
    question: "Tell me about the TopAll B2B platform.",
    keywords: ["topall b2b", "b2b", "institutes", "institutional", "analytics"],
    answer: `${b2b.title} is a ${b2b.category.toLowerCase()} platform. ${b2b.description} Key outcomes include ${b2b.caseStudy.outcomes.join(" ")} Stack: ${b2b.technologies.join(", ")}.`,
  },
  {
    id: "topall-b2c",
    question: "Tell me about the TopAll B2C platform.",
    keywords: ["topall b2c", "b2c", "neet", "jee", "learning platform"],
    answer: `${b2c.title} is a ${b2c.category.toLowerCase()} product. ${b2c.description} Notable work includes AI-powered study plans, an AI chatbot that increased engagement by 25%, CC Avenue subscriptions, and Firebase notifications for a platform with 100K+ active users.`,
  },
  {
    id: "aws",
    question: "What is his experience with AWS?",
    keywords: [
      "aws",
      "cloud",
      "ec2",
      "rds",
      "codepipeline",
      "codebuild",
      "codedeploy",
      "infrastructure",
      "devops",
    ],
    answer: `Hariharan works with AWS infrastructure in production environments, including EC2, RDS, CodeBuild, CodePipeline, and CodeDeploy, along with Docker, Kubernetes, Nginx, and CI/CD practices. He has contributed to deployments and cloud-backed systems supporting multi-tenant educational platforms.`,
  },
  {
    id: "ai",
    question: "What AI-powered features has he worked on?",
    keywords: [
      "ai",
      "artificial intelligence",
      "chatbot",
      "study plan",
      "intelligent",
      "ml",
      "llm",
    ],
    answer: `His AI-related experience is at the product-application layer in EdTech — not ML research. On TopAll B2C he worked on AI-powered study plans and integrated an AI chatbot for student support that increased engagement by 25%. He focuses on integrating intelligent features into learning workflows rather than training or fine-tuning models.`,
  },
  {
    id: "frontend",
    question: "What are his strongest frontend skills?",
    keywords: [
      "frontend",
      "front-end",
      "react",
      "next",
      "ui",
      "typescript",
      "strongest",
      "skills",
    ],
    answer: `His frontend focus includes React.js, Next.js, TypeScript, Redux Toolkit, Zustand, Context API, Tailwind CSS, Material UI, and Shadcn UI. He has built 25+ reusable React components and hooks, improved page load time by 30%, and raised Lighthouse scores by 35% in production systems.`,
  },
  {
    id: "contact",
    question: "How can I contact him?",
    keywords: ["contact", "email", "phone", "reach", "hire", "linkedin", "github"],
    answer: `You can reach Hariharan at ${portfolio.email} or ${portfolio.phone}. GitHub: ${portfolio.social[0].url}. LinkedIn: ${portfolio.social[1].url}.`,
  },
  {
    id: "backend",
    question: "What backend technologies does he use?",
    keywords: ["backend", "node", "nest", "express", "api", "database"],
    answer: `Backend experience includes Node.js, Nest.js, Express.js, REST APIs, WebSockets, Prisma, and Sequelize, with MongoDB, MySQL, and AWS RDS. He has designed and maintained production APIs and optimized schemas/queries by about 20%.`,
  },
  {
    id: "mentoring",
    question: "Has he mentored developers?",
    keywords: ["mentor", "mentoring", "junior", "teach", "guide"],
    answer: `Yes. At VVT Solutions he mentored 5+ junior developers on React, Git workflows, code reviews, and clean coding practices. During his internship at Kitkat Software Technologies he also mentored junior interns.`,
  },
];

export const ASSISTANT_FALLBACK =
  "I don't have that information in Hariharan's verified portfolio knowledge base. Try asking about his experience, TopAll projects, AWS work, AI product features, frontend skills, or contact details.";
