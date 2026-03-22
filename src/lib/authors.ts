export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedIn?: string;
}

export const AUTHORS: Author[] = [
  {
    slug: 'nolan-terry',
    name: 'Nolan Terry',
    role: 'Founder & CEO',
    bio: 'Nolan Terry is the founder of CraneCheck and CEO of Nolan Ventures, a construction technology company building software for safety-critical industries. With a background in enterprise SaaS and deep expertise in OSHA compliance workflows, he created CraneCheck to replace the paper-based inspection processes that put crane operators and job sites at risk.',
    expertise: ['OSHA Compliance', 'Crane Safety', 'Construction Tech', 'SaaS'],
  },
  {
    slug: 'cranecheck-team',
    name: 'CraneCheck Editorial Team',
    role: 'Industry Research & Content',
    bio: 'The CraneCheck editorial team produces in-depth guides on crane inspection compliance, OSHA regulations, and safety best practices. Our content is reviewed by certified crane inspectors and safety professionals to ensure accuracy and practical relevance for crane companies.',
    expertise: ['OSHA Regulations', 'Crane Inspection', 'Safety Standards', 'Industry Analysis'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug);
}
