// Dev-only: regenerate examples/*.json from examples/*.ask using @askdown/core.
//
//   node --experimental-strip-types regen.mjs
//
// Resolves @askdown/core from ASKDOWN_CORE (a path to its src/index.ts or a
// built entry), else a sibling ../askdown-core/src/index.ts checkout.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const corePath =
  process.env.ASKDOWN_CORE ?? fileURLToPath(new URL('../askdown-core/src/index.ts', import.meta.url));
const { parse } = await import(corePath);

const dir = fileURLToPath(new URL('./examples/', import.meta.url));
for (const file of readdirSync(dir).filter((f) => f.endsWith('.ask'))) {
  const { form, diagnostics } = parse(readFileSync(dir + file, 'utf8'));
  if (diagnostics.length) {
    console.error(file, JSON.stringify(diagnostics, null, 2));
    process.exit(1);
  }
  const out = { $schema: 'https://askdown.dev/schema/v0.1.json', ...form };
  writeFileSync(dir + file.replace(/\.ask$/, '.json'), JSON.stringify(out, null, 2) + '\n');
  console.log('wrote', file.replace(/\.ask$/, '.json'));
}
