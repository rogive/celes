module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: 0,
    'max-len': [
      2,
      120,
      2
    ],
    'no-console': "warn",
    'comma-dangle': [
      "error",
      "never"
    ],
    'jsx-a11y/label-has-associated-control': "off",
    'react/no-set-state': "off",
    'react/jsx-props-no-spreading': "off",
    'prefer-promise-reject-errors': "off",
    camelcase: "off"
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};