module.exports = {
  env: { browser: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "preact",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/no-unresolved": "off",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
  overrides: [
    {
      files: ["next.config.js"],
      rules: { "@typescript-eslint/no-var-requires": "off" },
    },
  ],
};
