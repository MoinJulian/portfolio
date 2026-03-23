export interface ExperienceEntry {
  title: string;
  company: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'self-employed' | 'education';
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Freelance',
    type: 'freelance',
    period: '2023 – Present',
    description: 'Building custom web applications and tools for clients across Europe. Specialised in SvelteKit, TypeScript, and modern deployment pipelines. Delivered 10+ projects on time and within budget.',
    tech: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Docker'],
    current: true,
  },
  {
    title: 'A-Levels (Computer Science, Maths, Physics)',
    company: 'School – England',
    type: 'education',
    period: '2023 – Present',
    description: 'Studying Computer Science, Mathematics, and Physics at A-Level in England. Deepening understanding of algorithms, data structures, discrete maths, and computational thinking.',
    tech: ['Computer Science', 'Mathematics', 'Physics'],
    current: true,
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub',
    type: 'self-employed',
    period: '2022 – Present',
    description: 'Contributing to open source projects on GitHub — SvelteKit ecosystem, developer tooling, and UI libraries. Authored several repositories used by the community.',
    tech: ['Svelte', 'TypeScript', 'GitHub Actions', 'CI/CD'],
    current: true,
  },
  {
    title: 'GCSEs',
    company: 'School – England',
    type: 'education',
    period: '2022 – 2023',
    description: 'Completed GCSEs in England after relocating from Germany. Achieved strong results in Science, Mathematics, and Computer Science while adapting to a new education system.',
    tech: ['Computer Science', 'Mathematics', 'Science'],
  },
];
