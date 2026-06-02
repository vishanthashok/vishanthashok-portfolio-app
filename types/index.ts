export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export interface Project {
  name: string;
  accent: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  date: string;
  color: string;
  bullets: string[];
}

export interface TechItem {
  name: string;
  devicon: string;
  label: string;
}
