Changelog
=========

0.3.1 (????-??-??)
------------------

* Releases are published from GitHub Actions with trusted publishing, and
  staged on npm for approval. The package contents are unchanged.
* The local `scripts/publish.sh` publishes to the vlt registry with public
  access. 0.3.0 was published there as private, which broke installs that need
  it, such as CI for `@askdown/core`.
* Added a Test workflow that runs on every push to main and every pull request.
  It checks that every example has a `.ask` and a `.json` file, and that the
  JSON conforms to the schema (`npm test`).
* Releases are published to the vlt registry with the npm CLI instead of `vlt
  publish`. They go live right away; only npm releases are staged.
* The publish jobs are safe to re-run: a version that is already published, or
  already staged on npm, is skipped instead of failing the job.


0.3.0 (2026-11-23)
------------------

* Added the `switch` question type: an on-off switch whose answer is a boolean.
  A required switch must be on.
* Removed the `checkboxes`, `dropdown` and `textarea` type aliases. Use
  `checkbox`, `select` and `paragraph`.
* The spec, JSON Schema and examples are published as the `@askdown/spec` npm
  package.


0.2.0 (2026-10-12)
------------------

* Changes up to this version are in the git history.
