import { NzSelectOptionInterface } from 'ng-zorro-antd/select';

export const HASHING_ALGORITHM = {
  md5: 'MD5',
  sha1: 'SHA1',
  sha2: 'SHA2',
  sha3: 'SHA3',
  ripemd160: 'RIPEMD160',
  hmac: 'HMAC',
  pbkdf2: 'PBKDF2'
};

export const CYPHER_ALGORITHM = {
  aes: 'AES',
  des: 'DES',
  tripleDes: 'TripleDES',
  rabbit: 'Rabbit',
  rc4: 'RC4',
  rc4Drop: 'RC4Drop'
};

export const ALGORITHM_OPTIONS: NzSelectOptionInterface[] = [
  // Hashing
  {
    label: HASHING_ALGORITHM.md5,
    value: HASHING_ALGORITHM.md5,
    groupLabel: 'Hashing'
  },
  {
    label: HASHING_ALGORITHM.sha1,
    value: HASHING_ALGORITHM.sha1,
    groupLabel: 'Hashing'
  },
  {
    label: HASHING_ALGORITHM.sha2,
    value: HASHING_ALGORITHM.sha2,
    groupLabel: 'Hashing'
  },
  {
    label: HASHING_ALGORITHM.sha3,
    value: HASHING_ALGORITHM.sha3,
    groupLabel: 'Hashing'
  },
  {
    label: HASHING_ALGORITHM.ripemd160,
    value: HASHING_ALGORITHM.ripemd160,
    groupLabel: 'Hashing'
  },
  {
    label: HASHING_ALGORITHM.hmac,
    value: HASHING_ALGORITHM.hmac,
    groupLabel: 'Hashing'
  },
  {
    label: HASHING_ALGORITHM.pbkdf2,
    value: HASHING_ALGORITHM.pbkdf2,
    groupLabel: 'Hashing'
  },
  // Cyphers
  {
    label: CYPHER_ALGORITHM.aes,
    value: CYPHER_ALGORITHM.aes,
    groupLabel: 'Cyphers'
  },
  {
    label: CYPHER_ALGORITHM.des,
    value: CYPHER_ALGORITHM.des,
    groupLabel: 'Cyphers'
  },
  {
    label: CYPHER_ALGORITHM.tripleDes,
    value: CYPHER_ALGORITHM.tripleDes,
    groupLabel: 'Cyphers'
  },
  {
    label: CYPHER_ALGORITHM.rabbit,
    value: CYPHER_ALGORITHM.rabbit,
    groupLabel: 'Cyphers'
  },
  {
    label: CYPHER_ALGORITHM.rc4,
    value: CYPHER_ALGORITHM.rc4,
    groupLabel: 'Cyphers'
  },
  {
    label: CYPHER_ALGORITHM.rc4Drop,
    value: CYPHER_ALGORITHM.rc4Drop,
    groupLabel: 'Cyphers'
  }
];
