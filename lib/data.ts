import type { Project, Experience, Social } from '@/types';

export const NAV_LINKS = [
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '/Vishanth Ashok.pdf' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIALS: Social[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/vishanth-ashok' },
  { label: 'GitHub', href: 'https://github.com/vishanthashok' },
  { label: 'Substack', href: 'https://vishanthashok.substack.com' },
];

export const EMAIL = 'vishanthashok@utexas.edu';

export const TECH_STACK = [
  'Next.js',
  'FastAPI',
  'Supabase',
  'Anthropic API',
  'Python',
  'SQL',
  'TypeScript',
  'Figma',
  'Vercel',
];

export const PROJECTS: Project[] = [
  {
    name: 'LonghornPath',
    description: 'AI academic planning platform for UT Austin students.',
    stack: ['Next.js 14', 'FastAPI', 'Supabase', 'Anthropic API'],
    tag: 'PM PORTFOLIO',
  },
  {
    name: 'Engralyx',
    description: 'AI institutional memory OS for PE, IB, and M&A firms — full branding and pitch deck.',
    stack: ['Product Strategy', 'Branding', 'Pitch Deck'],
    tag: 'VENTURE',
  },
  {
    name: 'Parcelis',
    description: 'AI parcel intelligence and real estate due-diligence co-pilot, powered by Claude.',
    stack: ['Claude', 'Geospatial Data', 'Due Diligence'],
    tag: 'FINTECH',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Logan Growth Advisors',
    role: 'M&A Analyst Intern',
    date: 'Summer 2026',
    description: 'Incoming summer analyst supporting sell-side M&A execution in Dallas.',
  },
  {
    company: 'Evermount Partners',
    role: 'Digital Infrastructure PE',
    date: 'Fall 2025',
    description: 'Benchmarked 15+ competitors and built growth scenario models across the Texas data-center market.',
  },
  {
    company: 'PNTHR Funds',
    role: 'Long/Short Equity',
    date: 'Spring 2025',
    description: 'Authored 30+ investment memos and automated research workflows in Python.',
  },
  {
    company: 'Fund Launch Partners',
    role: 'Multi-Sector PE',
    date: 'Early 2025',
    description: 'Supported LBO modeling and diligence across $20mm+ in transactions.',
  },
];

export const WRITING_FALLBACK = [
  {
    title: 'Debt-Fueled Growth Models — Part I',
    link: 'https://vishanthashok.substack.com',
    pubDate: '',
    description: 'How leverage-dependent business strategies compound — and where they break.',
  },
  {
    title: 'Notes on Energy Infrastructure',
    link: 'https://vishanthashok.substack.com',
    pubDate: '',
    description: 'What data-center demand is doing to power markets and the capital chasing them.',
  },
  {
    title: 'Building in Public at UT Austin',
    link: 'https://vishanthashok.substack.com',
    pubDate: '',
    description: 'Shipping products as a student — what works, what compounds, what to skip.',
  },
];
