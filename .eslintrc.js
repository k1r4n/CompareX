module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'requireConfigFile': false,
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'module-resolver',
  ],
  'rules': {
    'space-unary-ops': [
      'error', {
        'words': true,
        'nonwords': false,
        'overrides': {
          'new': true,
          '++': false,
        },
      },
    ],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
      'mode': 'strict',
    }],
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'module-resolver/use-alias': 2,
    'require-jsdoc': 0,
    'valid-jsdoc': 0,
    'max-len': 0,
    'spaced-comment': ['error', 'always'],
    'indent': ['error', 2],
    'block-spacing': 'error',
    'space-infix-ops': 'error',
    'no-regex-spaces': 'error',
    'no-multi-spaces': 'error',
    'quotes': ['error', 'single'],
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'eqeqeq': ['error', 'always'],
    'react-hooks/exhaustive-deps': 0,
  },
  'settings': {
    'import/ignore': [
      'axios',
      'chart.js',
    ],
    'react': {
      'version': 'detect',
    },
    'import/extensions': [
      '.js',
      '.jsx',
    ],
    'import/parser': 'babel-eslint',
    'import/resolver': {
      'babel-module': {allowExistingDirectories: true},
    },
  },
  'ignorePatterns': ['node_modules/'],
};
