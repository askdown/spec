# Askdown spec

The open specification for **Askdown**, a plain-text, Markdown-like language for forms.

- [`askdown.md`](askdown.md) — the normative specification.
- [`askdown.schema.json`](askdown.schema.json) — JSON Schema (2020-12) for the Askdown JSON form model.
- [`examples/`](examples/) — conformance fixtures: pairs of `*.ask` source and `*.json` form model.

Anyone may implement Askdown, in any software, open source or not.

The reference implementations live in separate repositories:

- [`@askdown/core`](https://github.com/askdown/core) — parser, serializer and validator.
- [`@askdown/html`](https://github.com/askdown/html) — accessible HTML rendering and a vanilla JS runtime.

## License

The specification, JSON Schema and examples are licensed
[CC BY 4.0](LICENSE). You may implement the format in any software.
