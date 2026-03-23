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
    title: 'Founder & CEO',
    company: 'RealGolf.Games UG (haftungsbeschränkt) – Germany',
    type: 'self-employed',
    period: '2023 – Present',
    description: 'Building Swingalytica, a web application that provides golfers with detailed insights into their swing performance. Developed the frontend using SvelteKit and TailwindCSS for a responsive and intuitive user experience, while implementing the backend with Node.js and PostgreSQL to handle data processing and storage. Deployed the application using Docker for scalability and ease of maintenance.',
    tech: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Supabase', 'MongoDB', 'Docker'],
    current: true,
  },
  {
    title: 'Web Developer',
    company: 'Hammer & Partner mbB',
    type: 'part-time',
    period: '2020 - Present',
    description: 'Working as a part-time web developer at Hammer & Partner mbB, a tax advisory firm in Germany. Responsible for maintaining and improving the company website, implementing new features, and ensuring optimal performance.',
    tech: ['Contao'],
    current: true,
  },
  {
    title: 'A-Levels (Computer Science, Maths, Economics)',
    company: 'School – England',
    type: 'education',
    period: '2023 – Present',
    description: 'Studying Computer Science, Mathematics, and Economics at A-Level in England. Deepening understanding of algorithms, data structures, discrete maths, and computational thinking.',
    tech: ['Computer Science', 'Mathematics', 'Economics'],
    current: true,
  },
  {
    title: 'GCSEs',
    company: 'School – England',
    type: 'education',
    period: '2022 – 2023',
    description: 'Completed GCSEs in England after relocating from Germany. Achieved strong results in Computer Science, Mathematics, Science, English, D&T, and Photography while adapting to a new education system.',
    tech: ['Computer Science', 'Mathematics', 'Science', 'English', 'D&T', 'Photography'],
  },
];
