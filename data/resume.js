export const profile = {
  name: "Adamya Mehta",
  role: "Full-Stack Engineer",
  tagline: ["Full-stack engineer.", "AI products.", "Shipped solo."],
  email: "mehtaadamya7@gmail.com",
  phone: "+91 9183155787",
  linkedin: "https://linkedin.com/in/adamya-mehta",
  github: "https://github.com/AdamyaMehta07",
  portrait: "/images/portrait.jpg",
  summary:
    "I ship production AI SaaS solo. Three live products, one year of MERN and LLM pipeline work.",
};

export const projects = [
  {
    id: "01",
    title: "AI Code Reviewer",
    stack: ["MERN", "Groq AI", "GitHub API"],
    stat: { value: "60%", label: "fewer LLM tokens" },
    blurb:
      "Reviews GitHub repos across 9 quality dimensions. Filters noise before the LLM sees it.",
    live: "https://aicodereviewer-ten.vercel.app/",
    repo: "https://github.com/AdamyaMehta07/aicodereviewer",
  },
  {
    id: "02",
    title: "AI Resume to Portfolio",
    stack: ["React", "Node.js", "MongoDB", "Groq AI", "Netlify API"],
    stat: { value: "85%", label: "less build time" },
    blurb:
      "Turns a resume into a deployed portfolio in under 10 seconds, with one-click Netlify deploy.",
    live: "https://ai-resume2portfolio.vercel.app/",
    repo: "https://github.com/AdamyaMehta07/AI-resume2portfolio",
  },
  {
    id: "03",
    title: "InvoiceForge",
    stack: ["React", "Tailwind", "jsPDF"],
    stat: { value: "40%", label: "faster page load" },
    blurb:
      "Invoice generator with zero-layout-shift PDF export and 50+ invoices stored locally.",
    live: "https://invoice-forge-beige.vercel.app/",
    repo: "https://github.com/AdamyaMehta07/InvoiceForge",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Affimintus",
    place: "Indore",
    period: "Jun 2025 - Dec 2025",
    points: [
      "Built MERN apps with MVC, 25% faster queries via indexing",
      "Reusable React components for consistent state management",
      "JWT and bcrypt auth workflows",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Jobsense",
    place: "Ujjain",
    period: "Apr 2023 - Oct 2023",
    points: [
      "Responsive layouts, 100% cross-browser accuracy",
      "Interactive UI modules with Flexbox and Grid",
    ],
  },
];

export const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "Framer Motion"],
  Backend: ["Node.js", "Express", "REST", "FastAPI", "JWT"],
  "AI / LLM": ["Groq API", "OpenAI", "Prompt Engineering", "LLM Pipelines"],
  Data: ["MongoDB", "MySQL", "PostgreSQL"],
  Languages: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
};