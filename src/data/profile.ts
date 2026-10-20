// Everything shown on the Home, About and Projects pages lives here.
// Edit this one file to keep your CV and portfolio up to date.
// NOTE: the entries below are placeholders — replace them with your own.

export const profile = {
	name: 'Richard Jacklin',
	role: 'Software Developer',
	tagline: 'TODO',
	location: 'Sudbury, ON Canada',
	email: 'rijacklin1@gmail.com',
	links: [
		{ label: 'GitHub', href: 'https://github.com/rijacklin' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-username' },
	],
	// Paragraphs shown at the top of the About page (plain text).
	bio: [
		'TODO',
		'Write a few sentences here about what you do, what you care about, and what you’re looking for.',
	],
};

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Languages', items: ['C#', 'TypeScript', 'Python', 'SQL'] },
	{ group: 'Frontend', items: ['React', 'Astro', 'HTML & CSS', 'Tailwind'] },
	{ group: 'Backend', items: ['Node.js', 'ASP.NET', 'PostgreSQL', 'REST', 'GraphQL'] },
	{ group: 'Tooling', items: ['Git', 'Docker', 'CI/CD', 'Linux'] },
];

export const experience: {
	company: string;
	role: string;
	start: string;
	end: string;
	summary: string;
	highlights: string[];
}[] = [
	{
		company: 'Athabasca University',
		role: 'Research Assistant',
		start: '2022',
		end: 'Present',
		summary: 'One sentence on what the team/product does.',
		highlights: [
			'Shipped X which improved Y by Z%.',
			'Led the migration of A to B.',
			'Mentored junior developers and ran code reviews.',
		],
	},
	{
		company: 'Previous Company',
		role: 'Junior Developer',
		start: '2020',
		end: '2022',
		summary: 'One sentence on what the team/product does.',
		highlights: ['Built and maintained features across the stack.'],
	},
];

export const education: {
	school: string;
	degree: string;
	start: string;
	end: string;
	notes?: string;
}[] = [
	{
		school: 'Athabasca University',
		degree: 'BSc Computing and Information Systems',
		start: '2022',
		end: '2026',
		notes: 'Optional: thesis, honours, relevant coursework.',
	},
];

export const projects: {
	title: string;
	description: string;
	tech: string[];
	href?: string; // live site
	repo?: string; // source code
	featured?: boolean; // featured projects also appear on the home page
}[] = [
	{
		title: 'Project One',
		description: 'A short description of what it does and why you built it.',
		tech: ['TypeScript', 'React', 'Node.js'],
		repo: 'https://github.com/your-username/project-one',
		href: 'https://example.com',
		featured: true,
	},
	{
		title: 'Project Two',
		description: 'Another project — focus on the problem solved and your role.',
		tech: ['Python', 'PostgreSQL'],
		repo: 'https://github.com/your-username/project-two',
		featured: true,
	},
];
