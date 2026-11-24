// Checks the files in this package: the JSON Schema compiles, every example
// has a .ask and a .json file, and every example's JSON conforms to the schema.
//
//   npm install --no-save ajv@8 && node scripts/check.mjs
//
// The parser checks (that each .ask parses to its .json) live in
// @askdown/core, which tests against this package.
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { Ajv2020 } from 'ajv/dist/2020.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const read = (path) => JSON.parse(readFileSync(root + path, 'utf8'));

const ajv = new Ajv2020({ allErrors: true, strict: false, validateFormats: false });
const validate = ajv.compile(read('askdown.schema.json'));

const files = readdirSync(root + 'examples');
const names = [...new Set(files.map((f) => f.replace(/\.(ask|json)$/, '')))];
let failed = false;
for (const name of names) {
  for (const ext of ['ask', 'json']) {
    if (!files.includes(`${name}.${ext}`)) {
      console.error(`examples/${name}.${ext} is missing`);
      failed = true;
    }
  }
  if (!files.includes(`${name}.json`)) continue;
  if (validate(read(`examples/${name}.json`))) {
    console.log(`ok   examples/${name}.json`);
  } else {
    console.error(`FAIL examples/${name}.json`);
    for (const e of validate.errors) console.error(`  ${e.instancePath || '/'}: ${e.message}`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);
