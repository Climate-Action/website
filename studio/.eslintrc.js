// const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    // 'object-curly-spacing': ['error', 'never']
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': ["error", "never"],
    "comma-dangle": ["warn", "always-multiline"],
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.9.0'
    }
  }
}
