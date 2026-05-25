// ╔══════════════════════════════════════════════════════════════════════╗
// ║              PORTFOLIO DATA  —  edit everything in here              ║
// ╚══════════════════════════════════════════════════════════════════════╝
//
//  All the content that appears on the site lives in this one file.
//  The React components in index.html read from these variables.
//
//  Sections:
//    PROFILE    → name, bio, links, "currently" cards
//    EXPERIENCE → work history (role, company, description, tech tags)
//    PROJECTS   → personal projects grid  (order: 1 shows first)
//    FREELANCE  → freelance / client work
//    SKILLS     → skills grid with proficiency levels
//    TECH_SLUGS → icon slug map for https://simpleicons.org
//

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════

const PROFILE = {
  name: "Urvish Rupareliya",
  firstName: "Urvish",
  title: "Software Engineer",
  longBio: [
    "I'm a software engineer with 4+ years of experience designing and shipping backend systems for enterprise platforms — lately, government-grade ERPs in the UAE. I work in NestJS and TypeScript, with RabbitMQ, Elasticsearch, AWS, and a fair amount of Docker behind the scenes.",
    "My focus is on the parts of a product nobody sees but everyone feels: event-driven microservices, multi-tenant RBAC, audit trails on-chain, and the cron jobs that quietly run the place at 3am. I care about clean APIs, real test coverage, and code reviews that actually teach.",
    "On the side I'm building Web3 tooling on Polygon — tamper-proof verification, immutable audit trails, and the strange new primitives that come with putting state on a blockchain.",
  ],
  location: "Remote · India",
  status: "Open to consulting & freelance",
  email: "urvishrupareliya75@gmail.com",
  phone: "+91 81419 50208",
  github: "https://github.com/urvish01",
  linkedin: "https://www.linkedin.com/in/urvish-rupareliya/",
  leetcode: "https://leetcode.com/urvish01",
  resume: "https://drive.google.com/file/d/1RM_ObY84iOMdo65CSCEJEj7ZZVzwrt3A/view",
  currentlyDoing: "VoiceLoop — AI voice feedback platform",
  currentlyReading: "Designing Data-Intensive Applications",
  currentlyListening: "Lofi Girl & late-night house",
};

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Onov8 · Omni Innovation",
    where: "Dubai, UAE · Remote",
    when: "Sep 2025 — Now",
    desc: "Building enterprise ERP for UAE government clients. Architecting event-driven microservices with NestJS, RabbitMQ and Elasticsearch on AWS — plus on-chain audit trails on Polygon for tamper-proof document verification.",
    tags: ["NestJS", "TypeScript", "RabbitMQ", "Elasticsearch", "Docker", "AWS", "PostgreSQL", "Polygon"],
  },
  {
    role: "Software Engineer",
    company: "Water & Shark",
    where: "Mumbai · Remote",
    when: "May 2024 — Apr 2025",
    desc: "Deployed as backend consultant to Onov8 (UAE). Shipped 100+ NestJS modules across 10+ microservices for a configurable enterprise ERP. Built a dynamic multi-tenant RBAC system that took unauthorized-access incidents to zero in production.",
    tags: ["NestJS", "TypeScript", "Microservices", "RBAC", "Jest"],
  },
  {
    role: "Software Engineer",
    company: "Nexowa",
    where: "Ahmedabad, IN",
    when: "Dec 2022 — Feb 2024",
    desc: "Owned modular NestJS service architecture for high-concurrency workflows. Led perf work that cut API error rate from 13% to 2% and improved system efficiency by 30%. Mentored juniors and ran code review with intent.",
    tags: ["NestJS", "TypeScript", "MySQL", "Node", "Jest"],
  },
  {
    role: "Software Developer Intern",
    company: "Knackroot Technolabs",
    where: "Ahmedabad, IN · On-site",
    when: "May 2022 — Nov 2022",
    desc: "Built REST + GraphQL APIs over Ethereum blockchain data and shipped a bulk-NFT transfer cart that cut average gas fees 15–20% for bulk buyers. Wrote 90%+ test coverage with Mocha & Chai.",
    tags: ["Node", "GraphQL", "Ethereum", "Web3", "Mocha"],
  },
];

const PROJECTS = [
  {
    order: 1,
    title: "VoiceLoop",
    glyph: "♫",
    size: "lg",
    badge: "Ongoing · AI",
    year: "2026",
    desc: "AI-powered voice feedback platform for local service businesses. Owners configure campaigns and questions; the system auto-calls customers, runs a 30-second AI voice interview, transcribes with Whisper, and uses Claude to extract sentiment, themes, and an NPS-style score — surfaced live on the owner's dashboard over WebSockets.",
    stack: ["NestJS", "Microservices", "BullMQ", "Twilio", "PostgreSQL", "TypeORM", "Redis", "S3", "Whisper", "Claude API", "WebSockets"],
    repo: "github.com/urvish01",
    status: "Ongoing",
  },
  {
    order: 2,
    title: "Crypto ERC20 Token & Faucet",
    glyph: "Ξ",
    size: "md",
    badge: "Web3",
    year: "2024",
    desc: "An ERC20 token contract paired with a faucet dApp. Wallet connection, gas estimation, claim cooldowns, and a clean front-end for non-crypto users.",
    stack: ["Solidity", "Hardhat", "React", "Ethers.js", "Polygon"],
    repo: "github.com/urvish01/Crypto-ERC20_Token-And-Faucet",
    status: "Live",
  },
  {
    order: 3,
    title: "Team Space",
    glyph: "T",
    size: "md",
    badge: "Real-time",
    year: "2024",
    desc: "Slack-style real-time chat with channels, DMs, presence, and typing indicators. Built with TypeScript end-to-end.",
    stack: ["TypeScript", "Socket.io", "Node", "MongoDB"],
    repo: "github.com/urvish01/team-space-real-time-chat",
    status: "Live",
  },
  {
    order: 4,
    title: "Sorting Visualizer",
    glyph: "//",
    size: "sm",
    badge: "Tool",
    year: "2023",
    desc: "Side-by-side animated comparison of 8 sorting algorithms. A teaching tool I built for myself, still useful when explaining Big-O.",
    stack: ["JavaScript", "Canvas"],
    repo: "github.com/urvish01/sorting-visualizer",
    status: "Open source",
  },
  {
  order: 5,
  title: "Amazon Clone",
  glyph: "🛒",
  size: "lg",
  badge: "Completed · E-Commerce",
  year: "2023",
  desc: "Full-featured Amazon-style shopping platform with product browsing, search, and filtering by category/size/color. Includes cart, checkout with coupons, order management, and payment flow. Users get profile pages with address book and order history; admins get a dashboard to manage products, categories, and sub-categories. Auth supports email/password plus Google and GitHub OAuth, with image uploads handled via Cloudinary.",
  stack: ["Express", "Node", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "MongoDB"],
  repo: "github.com/urvish01/amazon-clone",
  demo: "full-amazon-clone.vercel.app",
  status: "Completed",
},
//   {
//     order: 5,
//     title: "Open-Poket",
//     glyph: "$",
//     size: "sm",
//     badge: "Fintech",
//     year: "2023",
//     desc: "A lightweight personal finance tracker with category budgets and a no-nonsense CSV import flow.",
//     stack: ["JavaScript", "Node", "Express"],
//     repo: "github.com/urvish01/Open-Poket",
//     status: "Open source",
//   },
  {
    order: 6,
    title: "Blog Post",
    glyph: "¶",
    size: "sm",
    badge: "CMS",
    year: "2022",
    desc: "A minimal markdown-driven blog engine with auth, draft mode, and an editor that doesn't fight you.",
    stack: ["JavaScript", "Node", "MongoDB"],
    repo: "github.com/urvish01/blog-Post",
    status: "Open source",
  },
];

// Sort projects by `order` ascending. Edit the `order:` field on any project
// above to change where it appears in the grid — lowest number shows first.
// Tip: leave gaps (1, 2, 3 …) so you can slip a new project in without
// renumbering everything.
const PROJECTS_SORTED = [...PROJECTS].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

const FREELANCE = [
  {
    client: "Skybiz Global · Aviationskybiz",
    work: "Ride-hailing platform — backend from scratch",
    status: "Shipped",
    desc: "Built the full backend for a ride-hailing app: driver / rider modules, live tracking over sockets, ride request lifecycle, fare handling, and push notifications. Integrated IDfy for KYC, driver onboarding, and document verification.",
    stack: ["NestJS", "Node", "MongoDB", "Supabase", "AWS", "Socket.io"],
    year: "Apr 2024 — Sep 2025",
  },
  {
    client: "Skybiz Global · Aviationskybiz",
    work: "Dating platform — matching, chat, A/V calls",
    status: "Shipped",
    desc: "Built user matching, profile management, real-time chat, audio/video calling, blocking/reporting, and the broader engagement system. Wired up Twilio, Agora, Firebase, and Supabase realtime under the hood.",
    stack: ["NestJS", "TypeScript", "Supabase", "Twilio", "Firebase", "Agora"],
    year: "Apr 2024 — Sep 2025",
  },
];

const SKILLS = [
  { group: "Backend",  items: [
    { name: "NestJS", lvl: "Expert" },
    { name: "Node.js", lvl: "Expert" },
    { name: "TypeScript", lvl: "Expert" },
    { name: "GraphQL", lvl: "Advanced" },
    { name: "Express", lvl: "Advanced" },
  ]},
  { group: "Data & Infra", items: [
    { name: "PostgreSQL", lvl: "Advanced" },
    { name: "MongoDB", lvl: "Advanced" },
    { name: "Redis", lvl: "Advanced" },
    { name: "RabbitMQ", lvl: "Advanced" },
    { name: "Elasticsearch", lvl: "Advanced" },
    { name: "Docker", lvl: "Advanced" },
    { name: "AWS", lvl: "Advanced" },
  ]},
  { group: "Web3 & Frontend", items: [
    { name: "Solidity", lvl: "Comfortable" },
    { name: "Web3.js", lvl: "Comfortable" },
    { name: "Polygon", lvl: "Comfortable" },
    { name: "React", lvl: "Comfortable" },
    { name: "Jest", lvl: "Advanced" },
  ]},
];

// ═══════════════════════════════════════════════════════════════════════════
// TECH ICONS — simple-icons CDN, monochrome via CSS filter
// ═══════════════════════════════════════════════════════════════════════════

const TECH_SLUGS = {
  "react": "react",
  "typescript": "typescript",
  "javascript": "javascript",
  "node": "nodedotjs",
  "node.js": "nodedotjs",
  "nodejs": "nodedotjs",
  "nestjs": "nestjs",
  "graphql": "graphql",
  "solidity": "solidity",
  "mongodb": "mongodb",
  "polygon": "polygon",
  "next.js": "nextdotjs",
  "nextjs": "nextdotjs",
  "mysql": "mysql",
  "postgresql": "postgresql",
  "postgres": "postgresql",
  "aws": "amazonaws",
  "express": "express",
  "socket.io": "socketdotio",
  "shopify": "shopify",
  "shopify hydrogen": "shopify",
  "stripe": "stripe",
  "twilio": "twilio",
  "astro": "astro",
  "mdx": "mdx",
  "resend": "resend",
  "ethers.js": "ethereum",
  "ethereum": "ethereum",
  "hardhat": "ethereum",
  "wagmi": "ethereum",
  "websockets": "socketdotio",
  "web3": "web3dotjs",
  "web3.js": "web3dotjs",
  "canvas": "html5",
  "git": "git",
  "vercel": "vercel",
  "css": "css3",
  "css / animation": "css3",
  "docker": "docker",
  "rabbitmq": "rabbitmq",
  "elasticsearch": "elasticsearch",
  "redis": "redis",
  "jest": "jest",
  "mocha": "mocha",
  "firebase": "firebase",
  "supabase": "supabase",
  "agora": "agora",
  "microservices": "apachekafka",
  "rbac": null,
  "bullmq": "redis",
  "typeorm": "typeorm",
  "s3": "amazonaws",
  "whisper": "openai",
  "claude api": "anthropic",
  "claude": "anthropic",
};
