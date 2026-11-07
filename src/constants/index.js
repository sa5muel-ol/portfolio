import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

import {
  komikult as komikultImg,
  leaderboard as leaderboardImg,
  math as mathImg,
  movie as movieImg,
  nyeusi as nyeusiImg,
  space as spaceHub,
} from '../assets/projects';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Conversion Optimization',
    icon: frontend,
  },
  {
    title: 'Experimentation & Testing',
    icon: ux,
  },
  {
    title: 'Analytics & Dashboards',
    icon: backend,
  },
  {
    title: 'Machine Learning & AI',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: '/tech/python.png',
  },
  {
    name: 'R',
    icon: '/tech/r.png',
  },
  {
    name: 'c#',
    icon: '/tech/c-sharp-c.svg',
  },
  {
    name: 'Tableau',
    icon: '/tech/tableau.png',
  },
  {
    name: 'Power BI',
    icon: '/tech/powerbi.png',
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'spark',
    icon: '/tech/apache_spark.svg',
  },
  {
    name: 'MySQL',
    icon: '/tech/mysql.png',
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'aws',
    icon: '/tech/aws.svg',
  },
  {
    name: 'azure',
    icon: '/tech/microsoft-azure.svg',
  },
  {
    name: 'gcp',
    icon: '/tech/google-cloud-platform.svg',
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Conversion Optimization Manager',
    company_name: 'Nextiva',
    icon: '/companies/nextiva.svg',
    iconBg: '#333333',
    date: 'Nov 2026 - Present',
    points: [
      "Promoted from Specialist. Own the CRO program for Nextiva.com and the self-serve checkout flow — roadmap, ship/kill calls, and the number on visitor-to-lead and lead-to-customer conversion.",
      "Mentor specialists and interns and set the review bar on test quality; own the CRO tool stack, including vendor management (Convert).",
    ],
  },
  {
    title: 'Conversion Optimization Specialist',
    company_name: 'Nextiva',
    icon: '/companies/nextiva.svg',
    iconBg: '#333333',
    date: 'Dec 2025 - Nov 2026',
    points: [
      "Owned the CRO strategy and experimentation roadmap aligned with revenue growth objectives.",
      "Led A/B test design, execution, and statistical analysis across core conversion funnels — revenue per visitor +5% site-wide.",
      "Spearheaded the self-serve signup motion for core and AI Receptionist — self-serve revenue contribution +10% as a share of total revenue.",
      "Built AI-enabled CRO workflows that cut ideation-to-stakeholder-review time by 90% and accelerated experimentation velocity.",
      "Built a growth marketing attribution system linking ad spend to down-funnel revenue — channel-level attribution accuracy +80%.",
    ],
  },
  {
    title: 'LLM Optimization Marketing Intern',
    company_name: 'Nextiva',
    icon: '/companies/nextiva.svg',
    iconBg: '#333333',
    date: 'Jun 2025 - Present',
    points: [
      "Grew brand presence in LLM search results by 10% and LLM-based brand mentions ~8% week-on-week via automated content-gap analysis.",
      "Built ETL pipelines (Salesforce + paid media → Looker Studio), eliminating manual pulls and data-divergence errors.",
      "Built web-scraping pipelines across five major review platforms with a real-time reputation dashboard.",
      "Built an OpenAI API-powered crawler auditing pricing on thousands of pages in under an hour (vs. days manually).",
    ],
  },
  {
    title: 'Data Scientist / AI Engineer',
    company_name: 'Arizona State University',
    icon: '/companies/asu.png',
    iconBg: '#333333',
    date: 'Aug 2024 - May 2025',
    points: [
      "Built a BERT-based NLP model on IT support tickets at 85% accuracy, surfacing real-time themes in support requests.",
      "Built an AI evaluation engine in Python with DeepEval — 86% accuracy identifying chatbot bias, used by 50+ faculty and 70,000+ students.",
      "Validated readiness of new R&D AI tools for secure deployment to 50+ faculty and 70,000 students.",
    ],
  },
  {
    title: 'Full Stack Software Engineer',
    company_name: 'Asigma Capital Advisory Services Limited',
    icon: 'https://asigmagroup.com/staging/7904/wp-content/themes/nido-child/images/asigma-logo-mark-white.svg',
    iconBg: '#333333',
    date: 'Nov 2019 - Jul 2024',
    points: [
      "Led migration of a monolith to microservices, scalability +25%; earned promotion to Associate Software Engineer.",
      "Led a team of 5 engineers on an agricultural linkage SaaS platform (.NET, ReactJS, SQL, Azure Service Bus) — performance +40%, 200k+ farmers reached premium markets.",
      "Built a .NET platform with Power BI dashboards tracking livelihood restoration for 4,000+ households impacted by the EACOP project.",
      "Built cost-visualization dashboards (SQL, Looker Studio) for USAID's FtF program — production optimization +20%, $1.5M+ raised for 20 businesses.",
      "Built real-time performance-tracking dashboards (STATA, Python, Looker Studio) — efficiency +80%, adopted company-wide.",
    ],
  },
];

const projects = [
  {
    id: 'project-7',
    name: 'Transaction Prediction',
    description: 'Training a deep neural network to identify which customer will make a transaction.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'ml',
        color: 'green-text-gradient',
      },
    ],
    image: spaceHub,
    //repo: 'https://github.com/shaqdeff/KomiKult',
    //demo: 'https://symos.io/',
  },
  {
    id: 'project-6',
    name: 'Topic Modeling',
    description: 'Identifying the common themes in NY Times Articles for the past 2 years using Latent Dirichlet Allocation (LDA) with Gensim.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboardImg,
    //repo: 'https://github.com/shaqdeff/KomiKult',
    //demo: 'https://symos.io/',
  },
  {
    id: 'project-2',
    name: 'DataBridge',
    description:
      'A Streamlit data migration platform enabling database-to-database and csv-to-database data transfer.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: komikultImg,
    repo: 'https://github.com/sa5muel-ol/DataBridge',
    //demo: 'https://databridge.streamlit.app/',
  },
  {
    id: 'project-3',
    name: 'CNN Image Classifier',
    description: 'An image classification app built using tensorflow and wrapped in a Streamlit app.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: mathImg,
    repo: 'https://github.com/sa5muel-ol/happy-sad-tensorflow-cnn',
    //demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Sales Dashboard',
    description:
      'A cool dashboard showing sales of a Fashion retain store.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movieImg,
    //repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://lookerstudio.google.com/reporting/7fe8e38d-f9b0-482e-925c-8d7a7013b777',
  },
];

export { services, technologies, experiences, projects };
