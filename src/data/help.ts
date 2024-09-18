export const helpData = [
  { command: 'HELP', description: 'Displays list of available commands.' },
  { command: 'CLS', description: 'Clears the screen.' },
  { command: 'NAME', description: 'Displays the portfolio owner\'s name.' },
  { command: 'EDUCATION', description: 'Shows education information.' },
  { command: 'EXPERIENCE', description: 'Lists work experience.' },
  { command: 'SKILLS', description: 'Displays a list of skills.' },
  { command: 'PROJECTS', description: 'Shows information about projects.' },
  { command: 'ECHO', description: 'Displays messages or turns command echoing on or off.' },
];

export function getFormattedHelp(): string[] {
  const commands = [
    ['help', 'Displays list of available commands.'],
    ['cls', 'Clears the screen.'],
    ['whoami', "Displays the portfolio owner's name."],
    ['education', 'Shows education information.'],
    ['experience', 'Lists work experience.'],
    ['skills', 'Displays a list of skills.'],
    ['projects', 'Shows information about projects.'],
    ['ping radhey.dev', 'Displays a list of available commands.']
  ];

  const maxLength = Math.max(...commands.map(cmd => cmd[0].length));
  
  return [
    '╔' + '═'.repeat(maxLength + 2) + '╦' + '═'.repeat(50) + '╗',
    ...commands.map(([cmd, desc]) => 
      `║ ${cmd.padEnd(maxLength)} ║ ${desc.padEnd(48)} ║`
    ),
    '╚' + '═'.repeat(maxLength + 2) + '╩' + '═'.repeat(50) + '╝'
  ];
}
