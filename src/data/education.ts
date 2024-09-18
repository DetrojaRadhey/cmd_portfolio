export const educationData = [
  {
    institution: 'Charusat University, Gujarat',
    degree: 'Computer Engineering',
    details: 'CGPA: 8.3'
  },
  {
    institution: 'GSEB',
    degree: 'Higher Secondary Education',
    details: 'Score: 99.88 PR'
  },
  {
    institution: 'HSEB',
    degree: 'Secondary Education',
    details: 'Score: 91.26 PR'
  }
];

export function getFormattedEducation(): string[] {
  const maxInstitutionLength = Math.max(...educationData.map(edu => edu.institution.length));
  const maxDegreeLength = Math.max(...educationData.map(edu => edu.degree.length));

  return [
    '╔' + '═'.repeat(maxInstitutionLength + 2) + '╦' + '═'.repeat(maxDegreeLength + 2) + '╦' + '═'.repeat(20) + '╗',
    ...educationData.map(({ institution, degree, details }) =>
      `║ ${institution.padEnd(maxInstitutionLength)} ║ ${degree.padEnd(maxDegreeLength)} ║ ${details.padEnd(18)} ║`
    ),
    '╚' + '═'.repeat(maxInstitutionLength + 2) + '╩' + '═'.repeat(maxDegreeLength + 2) + '╩' + '═'.repeat(20) + '╝'
  ];
}
