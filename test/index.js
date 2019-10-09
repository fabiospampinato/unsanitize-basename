
/* IMPORT */

import {describe} from 'ava-spec';
import {default as unsanitize} from '../dist';

/* UNSANITIZE BASENAME */

describe ( 'unsanitize', it => {

  it ( 'works', t => {

    t.is ( unsanitize ( '‹›꞉ˮ⁄∖ǀʔ⁎.txt' ), '<>:"/\\|?*.txt' );

  });

});
