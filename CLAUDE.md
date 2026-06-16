# ⚠️ DEPRECATED PACKAGE — DO NOT ADD NEW CODE HERE

**`@rundown-studio/consts` is deprecated and being phased out in favour of
[`@rundown-studio/utils`](https://github.com/rundown-studio/package-utils).**

Before making ANY change to this package, STOP and tell the user:

> This package is DEPRECATED. New constants belong in `@rundown-studio/utils`
> (`src/consts/`). Are you sure you want to change `@rundown-studio/consts`
> instead of adding/editing it there?

Only proceed once the user confirms they explicitly want to touch this package
(e.g. an urgent fix to an already-published constant). For anything new, point
them to `@rundown-studio/utils`.

Notes:
- `npm deprecate` does not work on GitHub Packages, so the deprecation signal is
  the README banner plus the `postinstall` warning in `package.json` — not a
  registry-level flag.
