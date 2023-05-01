export const ENCODERS = {
  description: 'Convert data from one format to another',
  route: 'encoders',
  title: 'Encoders'
};

export const HASHING = {
  description:
    'Convert an input of any size into a fixed-size string of characters',
  route: 'hashing',
  title: 'Hashing'
};

export const HOME_CARDS = [
  {
    description: HASHING.description,
    route: HASHING.route,
    title: HASHING.title
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

export const MESSAGES = {
  copied: 'Copied to clipboard!'
};

export const THEME = {
  dark: 'dark',
  default: 'default'
};
