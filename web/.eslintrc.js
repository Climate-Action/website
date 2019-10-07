module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 'object-curly-spacing': ['error', 'never'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'space-before-function-paren': ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': ['warn'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9.0',
    },
  },
  parser: 'babel-eslint',
}
