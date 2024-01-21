module.exports = {
  extends: ["plugin:sonarjs/recommended", "standard"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
  },
};
