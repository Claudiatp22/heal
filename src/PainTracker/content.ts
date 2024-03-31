export interface IPainLevel {
  level: string;
  helperText: string;
  value: string;
  color: string;
}

export const painLevels: IPainLevel[] = [
  {
    level: '0',
    helperText: 'Amazing! 😀',
    value: '0',
    color: 'green',
  },
  {
    level: '1',
    helperText: 'Okay 🙂',
    value: '1',
    color: 'olive',
  },
  {
    level: '2',
    helperText: 'I feel some pain 😕',
    value: '2',
    color: 'salmon',
  },
  {
    level: '3',
    helperText: "I'm in pain most of the time 😵‍💫",
    value: '3',
    color: 'blue',
  },
  {
    level: '4',
    helperText: 'It can get instense 🥴',
    value: '4',
    color: 'purple',
  },
  {
    level: '5',
    helperText: 'This is unbearable 😫',
    value: '5',
    color: 'red',
  },
];
