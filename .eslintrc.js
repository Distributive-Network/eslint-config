/**
 * @type {import('eslint').Linter.Config}
 */
// eslint-disable-next-line no-undef
module.exports = {
  'extends': 'eslint:recommended',
  'rules': {
    'indent': [
      'warn',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': ['CallExpression']
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'func-call-spacing': [
      'warn', 'never'
    ],
    'no-prototype-builtins': 'off',
    'quotes': ['warn', 'single', 'avoid-escape'],
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': false }],
    'no-empty': [ 'warn' ],
    'no-trailing-spaces': [
      'warn', {
        skipBlankLines: true,
        ignoreComments: true
      }
    ],
    'no-multi-spaces': [
      'off',
    ],
    'prettier/prettier': [
      'off',
    ],
    'vars-on-top': [
      'error',
    ],
    'no-var': [
      'off',
    ],
    'spaced-comment': [
      'warn',
    ],
    'brace-style': [
      'error', 'allman', { 'allowSingleLine': true }
    ],
    'no-eval': [
      'error',
    ],
    'object-curly-spacing': [
      'warn',
      'always'
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
    'semi':                     [ 'off', { omitLastInOneLineBlock: true }], /* does not work right with exports.X = function allmanStyle */
    'semi-style':               [ 'warn', 'last' ],
    'semi-spacing':             [ 'error', { 'before': false, 'after': true }],
    'no-extra-semi':            [ 'warn' ],
    'no-tabs':                  [ 'error' ],
    'symbol-description':       [ 'error' ],
    'operator-linebreak':       [ 'warn', 'before' ],
    'new-cap':                  [ 'warn' ],
    'consistent-this':          [ 'error', 'that' ],
    'no-use-before-define':     [ 'error', { functions: false, classes: false } ],
    'no-shadow':                [ 'error' ],
    'no-label-var':             [ 'error' ],
    'radix':                    [ 'error' ],
    'no-self-compare':          [ 'error' ],
    'no-implicit-coercion':     [ 'error' ],
  }
}
