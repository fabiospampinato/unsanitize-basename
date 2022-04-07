
/* IMPORT */

import {describe} from 'fava';
import unsanitize from '../dist/index.js';

/* MAIN */

describe ( 'unsanitize', it => {

  it ( 'works', t => {

    t.is ( unsanitize ( '‹›꞉ˮ⁄∖ǀʔ⁎.txt' ), '<>:"/\\|?*.txt' );

  });

});
