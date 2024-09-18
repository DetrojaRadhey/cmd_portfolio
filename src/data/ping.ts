export const pingData = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/radhey-detroja-4308a8255/'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/DetrojaRadhey?tab=repositories'
  },
  {
    platform: 'Gmail',
    url: 'mailto:detrojaradhey1205@gmail.com'
  }
];

export function getFormattedPing(): string[] {
  return pingData.map(({ platform, url }) => 
    `<a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">${platform}</a>`
  );
}
