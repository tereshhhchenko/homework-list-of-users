# Decisions

## Tech choices

### Vue

Because it is a framework I am comfortable with. Considering time limit it would be risky to go with some other tool that I'm less experienced with.

### Nuxt.js

I chose Nuxt for building / serving the app because it can run in different modes including SSR (Server Side Rendering)

### Axios

Is used in Nuxt projects to fetch data in SSR mode

### lodash.throttle

Is a well tested and trustworthy utility. In this project it is used for reducing the amount of call for autocomplete feature.

### Jest

Jest comes out of the box and from my experience is more reliable than Ava when it comes to integration with other tools for testing.

### Linters

I'm a huge fan of style guides and conventions within a team. They help keep codebase clean and code-reviews focused on things other than opinions.

## Routing

Based on the api there should be at least 2 routes on the client side: list of users and user page

## Styling

* Scoped styles (encapsulated in components)
* Global styles (reset and utility classes)
* Prepended scss (variables and other logic injected in every component)

## State management

Is done with Vuex in modules. Api calls are done outside of Vuex, in `assets/js/api.js`. It can be easily replaced with some other source of data.

## What I didn't do intentionally due to time limitations

* User detailed info
* Form styling
* Pagination (also the API response doesn't include `usersCount`, so the amount of pages can only be hardcoded)

## What could be done better

* show error in UI in case the API is not responding
* vue-axe in dev mode
* test on mobile phone
* test with screen readers
