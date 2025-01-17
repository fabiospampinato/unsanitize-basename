# Unsanitize Basename

Unsanitize a file name, the inverse of the "[`sanitize-basename`](https://github.com/fabiospampinato/sanitize-basename)" library.

It tries to restore the original forbidden characters that have been replaced by [`sanitize-basename`](https://github.com/fabiospampinato/sanitize-basename).

## Install

```sh
npm install unsanitize-basename
```

## Usage

```ts
import unsanitize from 'unsanitize-basename';

// Let's unsanitize a file name

unsanitize ( '‹›꞉ˮ⁄∖ǀʔ⁎.txt' ); // => '<>:"/\\|?*.txt'
```

## Related

- [`sanitize-basename`](https://github.com/fabiospampinato/sanitize-basename): Sanitize a file name for cross-platform validity, the inverse of this library.

## License

MIT © Fabio Spampinato
