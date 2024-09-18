export const skillsData = [
  'Node.js', 'Express.js', 'React.js', 'Mongodb', 'Postgresql', 'SQL', 
  'Javascript', 'Typescript', 'Git', 'Github', 'Redux Toolkit', 'Websocket', 
  'Data Structures', 'Algorithms', 'Java', 'Rest api', 'Graphql', 
  'Embedded JS'
];

export function getFormattedSkills(): string[] {
  const rows = [];
  const numColumns = 3;
  const numRows = Math.ceil(skillsData.length / numColumns);

  for (let i = 0; i < numRows; i++) {
    const row = skillsData.slice(i * numColumns, (i + 1) * numColumns);
    rows.push(`║ ${row.map(skill => skill.padEnd(15)).join(' ')} ║`);
  }

  const border = '╔' + '═'.repeat(50) + '╗';
  const bottomBorder = '╚' + '═'.repeat(50) + '╝';

  return [
    border,
    ...rows,
    bottomBorder
  ];
}