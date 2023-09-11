# worker-template

This is a template for building a [Cloudflare Worker](https://workers.cloudflare.com/).

It uses [**Hono**](https://hono.dev/) as the underlying framework that handles routing, body parsing, and much more. [TypeScript](https://www.typescriptlang.org/) is used for type safety, along with [TypeScript ESLint](https://typescript-eslint.io/). [Wrangler](https://developers.cloudflare.com/workers/wrangler/) is Cloudflare's official CLI that handles deployment and local development. [GitHub Actions](https://docs.github.com/en/actions) lint the codebase and deploy to Cloudflare on push. [Prettier](https://prettier.io/) is used for code formatting. The package manager is [pnpm](https://pnpm.io/).

## Getting started

1. [Use this template](https://github.com/ryanccn/worker-template/generate) on GitHub.

   ![Use this template](/.github/images/use-this-template.png)

2. [Create an API token](https://dash.cloudflare.com/profile/api-tokens) on Cloudflare with the default Edit Workers template and set it as a repository secret named `CLOUDFLARE_API_TOKEN`.
3. Rerun the failed deploy run.

## License

Creative Commons Zero v1.0 Universal (Public Domain)
