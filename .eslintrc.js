module.exports = {
  root: true,
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    semi: ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
  },
};
