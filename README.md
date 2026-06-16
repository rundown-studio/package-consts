# Rundown Studio Consts

> ⚠️ **Deprecated.** This package is being phased out in favour of
> [`@rundown-studio/utils`](https://github.com/rundown-studio/package-utils),
> which now ships these constants alongside the shared utilities from a single
> flat entry point. New code should import from `@rundown-studio/utils`; existing
> consumers should migrate as constants are moved over. See the
> [phase-out notes](https://github.com/rundown-studio/package-utils#consts-and-the-rundown-studioconsts-phase-out)
> for how the transition is bridged.
>
> ```ts
> // before
> import { … } from '@rundown-studio/consts'
> // after
> import { … } from '@rundown-studio/utils'
> ```

## Install

```sh
echo "@rundown-studio:registry=https://npm.pkg.github.com" >> .npmrc

npm i @rundown-studio/consts
```

## Pinned Dependencies

- no issues

## Releasing/Packaging

Use the npm command `npm version major|minor|patch`.

Then `git push --follow-tags`
