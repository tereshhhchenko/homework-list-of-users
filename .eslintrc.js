module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:security/recommended',
  ],
  plugins: ['prettier', 'vuejs-accessibility', 'security'],
  // add your custom rules here
  rules: {},
}
