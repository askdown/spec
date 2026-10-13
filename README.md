# Askdown spec

The open specification for **Askdown**, a plain-text, Markdown-like language for forms.

- [`askdown.md`](askdown.md) — the normative specification.
- [`askdown.schema.json`](askdown.schema.json) — JSON Schema (2020-12) for the Askdown JSON form model.
- [`examples/`](examples/) — conformance fixtures: pairs of `*.ask` source and `*.json` form model.

Anyone may implement Askdown, in any software, open source or not.

The reference implementations live in separate repositories:

- [`@askdown/core`](https://github.com/askdown/core) — parser, serializer and validator.
- [`@askdown/html`](https://github.com/askdown/html) — accessible HTML rendering and a vanilla JS runtime.

## Versioning

This repository is the source of truth for the format. Consumers vendor a copy of
these files, pinned to a tag or commit here. Each release is tagged (e.g. `v0.2.0`);
the on-the-wire format version is carried separately in the `askdown` field of the
model (currently `"0.1"`).

## Regenerating the example fixtures

The `examples/*.json` files are produced by parsing the matching `*.ask` with
`@askdown/core`. When the format changes, regenerate them with a local build of
core (`node regen.mjs` against a checkout of `@askdown/core`).

## License

The specification, JSON Schema and examples are licensed
[CC BY 4.0](LICENSE). You may implement the format in any software.
