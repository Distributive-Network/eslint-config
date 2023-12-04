/**
 * @file    .eslintrc.js - ESLint configuration file, following Distributive's
 *          JS Style Guide.
 *
 * @author  Wes Garland <wes@distributive.network>
 * @date    Mar. 2022
 */

'use strict';

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'script',
  },
  'plugins': [
    '@distributive',
    '@stylistic',
    'jsdoc',
    'unicorn',
  ],
  'rules': {
    '@distributive/brace-style': ['warn'],
    '@stylistic/brace-style': ['off'],
    '@stylistic/func-call-spacing': ['off'],
    '@stylistic/indent': [
      'warn',
      2, {
        'SwitchCase': 1,
        'ignoredNodes': ['CallExpression', 'ForStatement']
      }
    ],
    '@stylistic/linebreak-style': ['error', 'unix'],
    '@stylistic/no-extra-semi': ['warn'],
    '@stylistic/no-multi-spaces': ['off'],
    '@stylistic/no-tabs': ['error'],
    '@stylistic/no-trailing-spaces': [
      'off', {
        skipBlankLines: true,
        ignoreComments: true,
      },
    ],
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/operator-linebreak': ['warn', 'before'],
    '@stylistic/quotes': ['warn', 'single'],
    '@stylistic/semi': ['off', { omitLastInOneLineBlock: true }], /* does not work right with exports.X = function allmanStyle */
    '@stylistic/semi-spacing': ['error', { 'before': false, 'after': true }],
    '@stylistic/semi-style': ['warn', 'last'],
    'jsdoc/require-file-overview': [
      'error', {
        tags: {
          file: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: true,
          },
          author: {
            mustExist: true,
          },
          date: {
            mustExist: true,
            preventDuplicates: true,
          },
        },
      },
    ],
    'jsdoc/require-jsdoc': [
      'error', {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'jsdoc/require-description': [
      'error', {
        exemptedBy: ['type', 'typedef'],
      },
    ],
    'unicorn/no-invalid-remove-event-listener': ['error'],
    'no-prototype-builtins': 'off',
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': false }],
    'no-empty': [ 'warn' ],
    'vars-on-top': [
      'error',
    ],
    'no-var': [
      'off',
    ],
    'spaced-comment': [
      'warn',
    ],
    'no-eval': [
      'error',
    ],
    'no-dupe-keys':             [ 'warn' ],
    'no-constant-condition':    [ 'warn' ],
    'no-extra-boolean-cast':    [ 'warn' ],
    'no-sparse-arrays':         [ 'off' ],
    'no-inner-declarations':    [ 'off' ],
    'no-loss-of-precision':     [ 'warn' ],
    'require-atomic-updates':   [ 'warn' ], /* watch for false positives, remove if (m)any */
    'eqeqeq':                   [ 'warn', 'always' ],
    'no-dupe-class-members':    [ 'warn' ],
    'no-fallthrough':           [ 'warn', { commentPattern: 'fall[ -]*through' }],
    'no-invalid-this':          [ 'error' ],
    'no-return-assign':         [ 'error' ],
    'no-return-await':          [ 'warn' ],
    'no-unused-expressions':    [ 'warn', { allowShortCircuit: true, allowTernary: true } ],
    'prefer-promise-reject-errors': [ 'error' ],
    'no-throw-literal':         [ 'error' ],
    'symbol-description':       [ 'error' ],
    'new-cap':                  [ 'warn' ],
    'consistent-this':          [ 'error', 'that' ],
    'no-use-before-define':     [ 'error', { functions: false, classes: false } ],
    'no-shadow':                [ 'error' ],
    'no-label-var':             [ 'error' ],
    'radix':                    [ 'error' ],
    'no-self-compare':          [ 'error' ],
    'require-await':            [ 'error'],
    'require-yield':            [ 'error' ],
    'no-promise-executor-return':       [ 'off' ],
    'no-template-curly-in-string':      [ 'warn' ],
    'no-unmodified-loop-condition':     [ 'warn' ],
    'no-unused-private-class-members':  [ 'warn' ],
    'no-implicit-coercion': [1, {
      disallowTemplateShorthand: false,
      boolean: true,
      number: true,
      string: true,
      allow: ['!!'] /* really only want to allow if(x) and if(!x) but not if(!!x) */
    }],
    'strict':                   [ 'error', 'safe' ],
  },
};
