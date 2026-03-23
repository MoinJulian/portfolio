export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['SvelteKit', 'Svelte', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST APIs', 'GraphQL', 'MongoDB', 'Supabase'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Vercel', 'Netlify', 'Render', 'n8n'],
  },
];
