
/* IMPORT */

import {REPLACEMENT_CHARACTERS, REGEX} from './constants';

/* MAIN */

const unsanitize = ( name: string ): string => {

  return name.replace ( REGEX, char => {

    return REPLACEMENT_CHARACTERS[char] || '';

  });

};

/* EXPORT */

export default unsanitize;
