
/* MAIN */

const REPLACEMENT_CHARACTERS = { //URL: https://github.com/fabiospampinato/sanitize-basename/tree/master/src/consts.ts
  '‹': '<',
  '›': '>',
  '꞉': ':',
  'ˮ': '"',
  '⁄': '/',
  '∖': '\\',
  'ǀ': '|',
  'ʔ': '?',
  '⁎': '*'
};

const REGEX = /[‹›꞉ˮ⁄∖ǀʔ⁎]/g;

/* EXPORT */

export {REPLACEMENT_CHARACTERS, REGEX};
