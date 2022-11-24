module.exports = {
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['standard', 'plugin:prettier/recommended', 'prettier'],
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react-hooks/rules-of-hooks': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-throw-literal': 'off',
        'yield-star-spacing': 'off',
        'comma-dangle': ['warn', 'only-multiline'],
        'newline-before-return': 'error',
        'padding-line-between-statements': [
            'warn',
            {
                'blankLine': 'always',
                'prev': ['multiline-expression', 'multiline-block-like'],
                'next': ['const', 'let'],
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'multiline-expression',
            },
            {
                'blankLine': 'always',
                'prev': '*',
                'next': 'multiline-block-like',
            },
            {
                'blankLine': 'any',
                'prev': ['import', 'export'],
                'next': ['import', 'export'],
            },
        ],
        'prettier/prettier': [
            'warn',
            {
                'printWidth': 160,
                'tabWidth': 4,
                'useTabs': true,
                'semi': false,
                'singleQuote': true,
                'bracketSpacing': true,
                'arrowParens': 'always',
                'proseWrap': 'preserve',
                'htmlWhitespaceSensitivity': 'ignore',
                'singleAttributePerLine': true,
                'quoteProps': 'preserve',
                'endOfLine': 'auto',
            },
        ],
    },
}