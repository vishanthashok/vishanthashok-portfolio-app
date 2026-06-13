export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  tag: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
}

export interface Social {
  label: string;
  href: string;
}
