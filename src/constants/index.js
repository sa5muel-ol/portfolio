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
    title: 'Data Science',
    icon: backend,
  },
  {
    title: 'Data Analytics',
    icon: ux,
  },
  {
    title: 'Machine Learning',
    icon: backend,
  },
  {
    title: 'Software Development',
    icon: frontend,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: 'tech/python.png',
  },
  {
    name: 'R',
    icon: 'tech/r.png',
  },
  {
    name: 'c#',
    icon: 'tech/c-sharp-c.svg',
  },
  {
    name: 'Tableau',
    icon: 'tech/tableau.png',
  },
  {
    name: 'Power BI',
    icon: 'tech/powerbi.png',
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'spark',
    icon: 'public/tech/apache_spark.svg',
  },
  {
    name: 'MySQL',
    icon: 'tech/mysql.png',
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
    icon: 'public/tech/aws.svg',
  },
  {
    name: 'azure',
    icon: 'tech/microsoft-azure.svg',
  },
  {
    name: 'gcp',
    icon: 'tech/google-cloud-platform.svg',
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Data Scientist / AI Acceleration Analyst',
    company_name: 'Arizona State University',
    icon: 'public/companies/asu.png',
    iconBg: '#333333',
    date: 'Aug 2024 - Present',
  },
  {
    title: 'Associate Software Engineer',
    company_name: 'Asigma Capital Advisory Services Limited',
    icon: 'https://asigmagroup.com/staging/7904/wp-content/themes/nido-child/images/asigma-logo-mark-white.svg',
    iconBg: '#333333',
    date: 'Jun 2024 - Aug 2024',
  },
  {
    title: 'Software Engineer',
    company_name: 'Asigma Capital Advisory Services Limited',
    icon: 'https://asigmagroup.com/staging/7904/wp-content/themes/nido-child/images/asigma-logo-mark-white.svg',
    iconBg: '#333333',
    date: 'Jan 2022 - Jun 2024',
  },
  {
    title: 'Business Intelligence Analyst (Remote)',
    company_name: 'Everybody Loves Languages',
    icon: 'public/companies/ell.png',
    iconBg: '#333333',
    date: 'Dec 2021 - Feb 2022',
  },
  {
    title: 'Business and Data Analyst',
    company_name: 'Asigma Capital Advisory Services Limited',
    icon: 'https://asigmagroup.com/staging/7904/wp-content/themes/nido-child/images/asigma-logo-mark-white.svg',
    iconBg: '#333333',
    date: 'Nov 2019 - Jan 2022',
  },
];

const projects = [
  
  {
    id: 'project-6',
    name: 'NY Times Top Modeling',
    description: 'Topic Modeling on NY Times Articles for the past 2 years using Latent Dirichlet Allocation (LDA) with Gensim.',
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
    image: 'public/projects/nytimes.webp',
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
    image: '/projects/databridge.jpg',
    repo: 'https://github.com/sa5muel-ol/DataBridge',
    //demo: 'https://databridge.streamlit.app/',
  },
  {
    id: 'project-3',
    name: 'CNN Image Classifier',
    description: 'An image classification app built using tensorflow and wrapped in a Streamlit app',
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
    image: 'projects/image_classifier.jpg',
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
    image: 'projects/Australia.png',
    //repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://lookerstudio.google.com/reporting/7fe8e38d-f9b0-482e-925c-8d7a7013b777',
  },
  {
    id: 'project-1',
    name: 'Symos',
    description: 'An agricultural linkages platform giving farmers access to premium markets.',
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
    image: 'projects/symos.png',
    //repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://symos.io/',
  },
  
];

export { services, technologies, experiences, projects };
