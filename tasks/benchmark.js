
/* IMPORT */

import benchmark from 'benchloop';
import unsanitize from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'negative',
  fn: () => {
    unsanitize ( 'foooooooo.txt' );
  }
});

benchmark ({
  name: 'positive',
  fn: () => {
    unsanitize ( '‹›꞉ˮ⁄∖ǀʔ⁎.txt' );
  }
});

benchmark.summary ();
