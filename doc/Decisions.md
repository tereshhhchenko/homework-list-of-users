# Decisions

## Choice of tools

Nuxt because it has SPA, SSR and SSG modes and it is possible to switch between them in the future if it benefits the project

## Project setup

1. Nuxt template with eslint, prettier, commitlint, jest, axios, lodash throttle
2. Eslint plugins for accessibility and security
3. Axe for vue https://axe.vue-a11y.com/

## Routing

Based on api there should be at least 2 pages: list of users and user page

## What could be added

i18n
pagination (didn't implement because the API doesn't return users count)
fetching user data (didn't have enough time)

## TODO before sending

unit tests, vue-axe in dev mode
test on mobile phone
write docs
host at netlify
style form
test with screen readers
