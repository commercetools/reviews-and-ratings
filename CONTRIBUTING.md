# Contributing

Thanks for taking a look. This is shared, unsupported reference code (see [`SUPPORT.md`](./SUPPORT.md)): issues and pull requests are welcome, and we will look at them when we can, but we can't promise a reply.

## How the project works

What the app does is described in [`FEATURES.md`](./FEATURES.md), the states and flow in [`docs/MODERATION-FLOW.md`](./docs/MODERATION-FLOW.md). When you change behavior, update those documents together with the code.

## Running it

```shell
cd reviews-and-ratings-app
npm install
npm test            # jest, GraphQL layer mocked with msw
npm run lint
npm run typecheck
npm run build
npm start           # needs a Merchant Center project, see docs/SETUP.md
```

The seed scripts in `scripts/` have their own tests: `node --test scripts/*.test.mjs`.

## Pull requests

- Run build, lint, typecheck and tests (CI does the same on pull requests into `main`).
- Every UI text goes through react-intl with an English default (`messages.ts`) and a German text in `src/i18n/data/de.json`; run `npm run extract-intl`.
- Controls are disabled, never hidden, without Manage permission.
- Source files carry no license header; contributions are made under the MIT license of this repository (see `LICENSE`).
- Never commit credentials: `.env.local` files are ignored; use `.env.example` files for placeholders.
