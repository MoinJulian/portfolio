export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['SvelteKit', 'Svelte', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript', 'Vite', 'Figma'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'SQLite', 'Redis', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Vercel', 'Netlify', 'Cloudflare'],
  },
];
