import type { Project, Experience, TechItem } from '@/types';

/* Map stack names → devicon path (empty string = no icon) */
export const STACK_ICONS: Record<string, string> = {
  'FastAPI':           'fastapi/fastapi-original',
  'React':             'react/react-original',
  'Next.js':           'nextjs/nextjs-original',
  'TypeScript':        'typescript/typescript-original',
  'JavaScript':        'javascript/javascript-original',
  'Supabase':          'supabase/supabase-original',
  'PostGIS':           'postgresql/postgresql-original',
  'Python':            'python/python-original',
  'Tailwind v4':       'tailwindcss/tailwindcss-original',
  'Tailwind':          'tailwindcss/tailwindcss-original',
  'Figma':             'figma/figma-original',
  'AWS Bedrock':       'amazonwebservices/amazonwebservices-original-wordmark',
  'Node.js':           'nodejs/nodejs-original',
  'MongoDB':           'mongodb/mongodb-original',
  'PostgreSQL':        'postgresql/postgresql-original',
  'MySQL':             'mysql/mysql-original',
  'Git':               'git/git-original',
  'Flask':             'flask/flask-original',
  'Pandas':            'pandas/pandas-original',
  'R':                 'r/r-original',
  'C#':                'csharp/csharp-original',
  'HTML':              'html5/html5-original',
  'GCP':               'googlecloud/googlecloud-original',
  'AWS':               'amazonwebservices/amazonwebservices-original-wordmark',
  'Snowflake':         'snowflake/snowflake-original',
};

export const PROJECTS: Project[] = [
  {
    name: 'MediVoice AI',
    accent: '#22d3ee',
    description:
      'Real-time AI hospital triage assistant that converts live calls to clinical risk assessments. Built for high-throughput emergency intake with HIPAA-aligned data handling.',
    stack: ['FastAPI', 'React', 'Twilio', 'AWS Bedrock', 'Claude 3 Haiku', 'HL7 FHIR', 'SSE', 'Cloudflare Tunnels'],
    link: '#',
  },
  {
    name: 'Atlas Layer',
    accent: '#818cf8',
    description:
      'Full-stack geospatial intelligence platform aggregating real estate, agricultural, and geopolitical data. Enables multi-layer spatial analysis with AI-generated insights.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostGIS', 'Claude API', 'Gemini', 'OpenAI'],
    link: '#',
  },
  {
    name: 'AetherOS',
    accent: '#a78bfa',
    description:
      'AI-powered personal operating system with 9 productivity modules covering tasks, writing, scheduling, finance, and focus. Built for power users who think in systems.',
    stack: ['TypeScript', 'Tailwind v4', 'Supabase', 'Claude API', 'Sentry', 'Figma'],
    link: '#',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Logan Growth Advisors',
    role: 'Summer Analyst',
    location: 'Dallas, TX',
    date: 'Summer 2026',
    color: '#f59e0b',
    bullets: [
      'Incoming summer analyst role in growth advisory',
    ],
  },
  {
    company: 'Evermount Partners',
    role: 'Strategy Intern',
    location: 'Austin, TX',
    date: 'Fall 2025',
    color: '#22d3ee',
    bullets: [
      'Benchmarked 15+ competitors for TX data center and industrial real estate market',
      'Built scenario models for growth and GTM strategy',
    ],
  },
  {
    company: 'PNTHR Funds LP',
    role: 'Investment Analyst Intern',
    location: 'Remote',
    date: 'Spring 2025',
    color: '#a78bfa',
    bullets: [
      'Automated Python workflows reducing research time by 23%',
      'Authored 30+ investment memos across sectors',
      'Conducted diligence on 15+ private deals',
    ],
  },
  {
    company: 'Fund Launch Partners',
    role: 'PE Analyst Intern',
    location: 'Remote',
    date: 'Early 2025',
    color: '#818cf8',
    bullets: [
      'Supported $20mm multifamily LBO modeling and analysis',
      'Reviewed $1.5mm print media LBO transaction',
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  { name: 'Python',      devicon: 'python/python-original',                               label: 'Python' },
  { name: 'TypeScript',  devicon: 'typescript/typescript-original',                       label: 'TypeScript' },
  { name: 'JavaScript',  devicon: 'javascript/javascript-original',                       label: 'JavaScript' },
  { name: 'R',           devicon: 'r/r-original',                                         label: 'R' },
  { name: 'C#',          devicon: 'csharp/csharp-original',                               label: 'C#' },
  { name: 'HTML',        devicon: 'html5/html5-original',                                 label: 'HTML' },
  { name: 'React',       devicon: 'react/react-original',                                 label: 'React' },
  { name: 'Next.js',     devicon: 'nextjs/nextjs-original',                               label: 'Next.js' },
  { name: 'FastAPI',     devicon: 'fastapi/fastapi-original',                             label: 'FastAPI' },
  { name: 'Flask',       devicon: 'flask/flask-original',                                 label: 'Flask' },
  { name: 'Tailwind',    devicon: 'tailwindcss/tailwindcss-original',                     label: 'Tailwind' },
  { name: 'Node.js',     devicon: 'nodejs/nodejs-original',                               label: 'Node.js' },
  { name: 'Supabase',    devicon: 'supabase/supabase-original',                           label: 'Supabase' },
  { name: 'PostgreSQL',  devicon: 'postgresql/postgresql-original',                       label: 'PostgreSQL' },
  { name: 'MongoDB',     devicon: 'mongodb/mongodb-original',                             label: 'MongoDB' },
  { name: 'MySQL',       devicon: 'mysql/mysql-original',                                 label: 'MySQL' },
  { name: 'Snowflake',   devicon: 'snowflake/snowflake-original',                         label: 'Snowflake' },
  { name: 'AWS',         devicon: 'amazonwebservices/amazonwebservices-original-wordmark', label: 'AWS' },
  { name: 'GCP',         devicon: 'googlecloud/googlecloud-original',                     label: 'GCP' },
  { name: 'Git',         devicon: 'git/git-original',                                     label: 'Git' },
  { name: 'Figma',       devicon: 'figma/figma-original',                                 label: 'Figma' },
  { name: 'Pandas',      devicon: 'pandas/pandas-original',                               label: 'Pandas' },
];
