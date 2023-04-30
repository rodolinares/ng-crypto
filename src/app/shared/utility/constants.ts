export const ENCODERS = {
  description: 'Convert data from one format to another',
  route: 'encoders',
  title: 'Encoders'
};

export const HOME_CARDS = [
  {
    description:
      'Convert an input of any size into a fixed-size string of characters',
    route: 'hashing',
    title: 'Hashing'
  },
  {
    description: 'Convert plain text into a secret code',
    route: 'ciphers',
    title: 'Ciphers'
  },
  {
    description: ENCODERS.description,
    route: ENCODERS.route,
    title: ENCODERS.title
  },
  {
    description: 'Coming soon!',
    route: '',
    title: 'HMAC'
  },
  {
    description: 'Coming soon!',
    route: '',
    title: 'PBKDF2'
  }
];

export const THEME = {
  dark: 'dark',
  default: 'default'
};
