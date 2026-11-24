# Askdown spec

The open specification for **Askdown**, a plain-text, Markdown-like language for forms.

- [`askdown.md`](askdown.md) — the normative specification.
- [`askdown.schema.json`](askdown.schema.json) — JSON Schema (2020-12) for the Askdown JSON form model.
- [`examples/`](examples/) — conformance fixtures: pairs of `*.ask` source and `*.json` form model.

Anyone may implement Askdown, in any software, open source or not.

## Using the files in an implementation

The spec, schema and examples are published as [`@askdown/spec`](https://www.npmjs.com/package/@askdown/spec), so an implementation can test against a pinned version:

```sh
npm install --save-dev @askdown/spec
```

```js
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const schemaPath = require.resolve('@askdown/spec/askdown.schema.json');
const examplePath = require.resolve('@askdown/spec/examples/rsvp.ask');
```

Every `examples/*.ask` file has a `*.json` next to it with the form model a conforming parser produces.

The reference implementations live in separate repositories:

- [`@askdown/core`](https://github.com/askdown/core) — parser, serializer and validator.
- [`@askdown/html`](https://github.com/askdown/html) — accessible HTML rendering and a vanilla JS runtime.

## License

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)

The specification, JSON Schema and examples in this repository are licensed under the
[Creative Commons Attribution 4.0 International License](LICENSE) (CC BY 4.0).

You may share and adapt this material, and implement the Askdown format in any software —
open source or not — provided you give appropriate credit. A link back to
[github.com/askdown/spec](https://github.com/askdown/spec) is enough.
