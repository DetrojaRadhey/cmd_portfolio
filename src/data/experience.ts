export const experienceData = [
  {
    position: 'SDE Intern',
    company: 'Ivotiontech',
    location: 'Ahmedabad, Gujarat',
    duration: 'May - June, 2023',
    details: 'Working on web development projects using React and Node.js',
    url: 'https://ivotiontech.com'
  },
];

export function getFormattedExperience(): string[] {
  return experienceData.map(({ position, company, location, duration, details, url }) => [
    `${position} at ${company}`,
    `${location}  (${duration})`,
    `${details}`,
    `<a href="${url}" target="_blank" style="text-decoration: underline; rel="noopener noreferrer">${url}</a>`,
    ''
  ]).flat();
}
