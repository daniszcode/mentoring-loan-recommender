module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "standard-with-typescript",
    'plugin:"@typescript-eslint/recommended',
    "prettier/@typescript-eslint",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
