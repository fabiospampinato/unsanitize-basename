
/* IMPORT */

const {default: unsanitize} = require ( '../dist' ),
      benchmark = require ( 'benchloop' );

/* BENCHMARK */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: 'unsanitize-basename',
  fn: () => {
    unsanitize ( '‹›꞉ˮ⁄∖ǀʔ⁎.txt' );
  }
});

benchmark.summary ();
