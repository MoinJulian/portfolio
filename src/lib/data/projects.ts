export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    description: 'A high-performance personal portfolio built with SvelteKit, TypeScript, and TailwindCSS. Features dark mode, smooth animations, and a clean minimal design inspired by top SaaS products.',
    tech: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Vite'],
    github: 'https://github.com/MoinJulian/portfolio',
    live: 'https://moinjulian.com',
    featured: true,
  },
  {
    id: 'swingalytica',
    title: 'Swingalytica',
    description: 'A golf analytics web application that provides golfers with detailed insights into their swing performance.',
    tech: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Supabase', 'MongoDB', 'Docker'],
    live: 'https://swingalytica.com',
    featured: true,
  },
  
];
