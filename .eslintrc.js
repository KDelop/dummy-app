module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.base.json', '**/tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'import', 'react-hooks', '@typescript-eslint'],
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'eslint:recommended',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@next/next/recommended',
  ],
  // Example set global variable
  globals: {
    var1: 'writable',
    tracking: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '**/tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        resolvePaths: [__dirname],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  ignorePatterns: ['countries/*/out', 'countries/*/public', '**/*.config.js', '.eslintrc.js', 'app.js'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['StrictPascalCase'],
        prefix: ['is', 'has', 'can', 'should', 'will', 'did'],
      },
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'StrictPascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        // Interface name should not be prefixed with `I`.
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        // Type parameter name should either be `T` or a descriptive name.
        selector: 'typeParameter',
        filter: /^T$|^[A-Z][a-zA-Z]+$/.source,
        format: ['StrictPascalCase'],
      },
      {
        // Allow these in non-camel-case when quoted.
        selector: ['classProperty', 'objectLiteralProperty'],
        format: null,
        modifiers: ['requiresQuotes'],
      },
      {
        selector: ['enum', 'enumMember', 'objectLiteralProperty'],
        format: ['strictCamelCase'],
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': [
      'off',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': [1, 'never'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          '**/*.stories.tsx',
          'stories/**',
          '**/*.test.js',
          '**/setupTests.js',
        ],
      },
    ],
    'no-param-reassign': [2, { props: false }],
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-console': 1,
    'no-unexpected-multiline': 'error',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-use-before-define': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      // Storybook
      files: ['*.ts', '*.tsx'],
      excludedFiles: '*.stories.tsx',
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
