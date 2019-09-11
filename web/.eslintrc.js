module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    // 'object-curly-spacing': ['error', 'never'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'space-before-function-paren': ['warn', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9.0'
    }
  },
  parser: 'babel-eslint'
}
