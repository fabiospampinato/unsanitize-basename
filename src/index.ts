
/* IMPORT */

import {REPLACEMENT_CHARACTERS, REGEX} from './consts';

/* UNSANITIZE BASENAME */

function unsanitize ( name: string ): string {

  return name.replace ( REGEX, x => REPLACEMENT_CHARACTERS[x] );

}

/* EXPORT */

export default unsanitize;
