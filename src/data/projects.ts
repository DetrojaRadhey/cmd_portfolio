export const projectsData = [
  {
    name: 'Chess 2 Player Game',
    description: 'A web-based chess game for two players accross the world.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'Web Sockets']
  },
  {
    name: 'DNS (UDP) Server',
    description: 'A simple DNS server implementation using UDP protocol.',
    technologies: ['TypeScript', 'Node.js', 'UDP', 'DNS']
  },
  {
    name: 'Airbnb Clone',
    description: 'A web application mimicking core features of Airbnb.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Embaded JavaScript']
  },
  {
    name: 'Chat Application',
    description: 'Real-time chat application with multiple rooms.',
    technologies: ['Web Sockets', 'Node.js', 'Express', 'React', 'Redux']
  },
  {
    name: 'Library Management System',
    description: 'A system for managing books, users, and loans in a library.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'React', 'MongoDB']
  }
];

export function getFormattedProjects(): string[] {
  return projectsData.map(({ name, description, technologies }) => [
    `Project: ${name}`,
    `Description: ${description}`,
    `Technologies: ${technologies.join(', ')}`,
    ''
  ]).flat();
}
