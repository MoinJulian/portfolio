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
    id: 'web-app',
    title: 'Full-Stack Task Manager',
    description: 'A collaborative task management application with real-time updates, drag-and-drop boards, and team workspaces. Built with a RESTful API and reactive frontend.',
    tech: ['SvelteKit', 'Node.js', 'PostgreSQL', 'TypeScript', 'Redis'],
    github: 'https://github.com/MoinJulian',
    featured: true,
  },
  {
    id: 'cli-tool',
    title: 'Dev Environment CLI',
    description: 'A command-line tool for scaffolding new projects with opinionated defaults — TypeScript, ESLint, Prettier, Git hooks, and CI/CD templates out of the box.',
    tech: ['Node.js', 'TypeScript', 'Commander.js', 'Inquirer'],
    github: 'https://github.com/MoinJulian',
    featured: true,
  },
  {
    id: 'api-gateway',
    title: 'Microservices API Gateway',
    description: 'A lightweight, configurable API gateway that handles authentication, rate-limiting, request transformation, and routing for microservice architectures.',
    tech: ['Go', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/MoinJulian',
    featured: false,
  },
  {
    id: 'ui-library',
    title: 'Svelte Component Library',
    description: 'An accessible, themeable component library for SvelteKit applications. Includes 40+ components with full TypeScript support and dark mode out of the box.',
    tech: ['Svelte', 'TypeScript', 'TailwindCSS', 'Storybook'],
    github: 'https://github.com/MoinJulian',
    featured: false,
  },
  {
    id: 'discord-bot',
    title: 'Discord Community Bot',
    description: 'A feature-rich Discord bot for managing developer communities — code snippet sharing, documentation search, scheduled announcements, and moderation tools.',
    tech: ['TypeScript', 'Discord.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/MoinJulian',
    featured: false,
  },
];
