
/* IMPORT */

import {REPLACEMENT_CHARACTERS, REPLACEMENT_RE} from './constants';

/* MAIN */

const unsanitize = ( name: string ): string => {

  return name.replace ( REPLACEMENT_RE, char => {

    return REPLACEMENT_CHARACTERS[char] || '';

  });

};

/* EXPORT */

export default unsanitize;
