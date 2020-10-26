# Build Setup Instructions

## Dependencies

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Nuxt.js](https://nuxtjs.org)

## Installation

```bash
$ yarn install
```

## Environment variables

To avoid pushing sensitive info to the repo, environment variables are used.
Please provide environment variables in `.env` file.
1. Create `.env` file in project root directory
2. Copy variables from `.env-defaults`
3. Set up values, for example:

```env
NUXT_API_BASE=https://my-api-endpoint/v1
```

## Run Nuxt in SSR mode

```bash
# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

## Generate static pages

By default Nuxt will run in SSR mode. If you want to generate static pages, change change `target` option to `static` in `nuxt.config.js` and run

```bash
$ yarn generate
```

## Run tests

```bash
$ yarn test
```