# KDS JavaScript Style Guide

This document is an incomplete draft of a proposed style guide for JavaScript written at KDS.

Last Updated: July 2021

## Cardinal Rules

 1. You are an intelligent sentient being working on code that you can see. While rules, linters, and style guides are great innovations, they do not have the same common sense you possess.   You are free to ignore the style guide, on occasion, when it makes sense to do so.
 2. We do not change lines unless we are changing code.  Incorrectly-indented code, for example, should be left incorrectly indented if it has already been been merged to develop that way, until it needs to be modified.  It is more important to preserve the git history than it is to have beautiful code. Proper source code attribution and regular (uncollapzsed) check-ins is one of the techniques I use to keep the tax people from making us fill out time sheets every day!
 *Corollary: please do your best to submit only beautiful code for MR,  as it won't be fixed for purely cosmetic reasons later!*

### When to apply this style guide
 - When working in a third-party repository, follow their style guide or prevailing style, as appropriate
 - When working in older areas of DCP and making minor changes, you are free to use the existing prevailing style OR the new style, or a blend of both.
 - When working in older areas of DCP and making substantial changes, use this style guide for lines of code you are writing or changing.

## Module Systems
### NodeJS
CommonJS is preferred, either 1.0 or 2.0 with the BravoJS cjs-node shim. 

### Browser
Either ESMs or BravoJS (CommonJS modules 2.0) are acceptable. WebPack is also acceptable, however should only be used if there is a significant technical or maintenance advantage for the specific project; there are  WebPack interoperability gotchas with dcp-client etc.

## Classes / Inheritance Syntax
Either traditional ES5 or ES6 class syntax is acceptable. 

## CommonJS Modules
NodeJS implements a module system which is nearly CommonJS Modules/1.0.0 compliant, however they all several extensions which are not.

### Exports Object Replacement
  The most important property to be aware of is that CommonsJS modules are intended to be singletons, returning only one exports object from the first use of `require` to address a given module. Failure to follow this guidance produces modules which can have problems with cyclical dependency graphs.
  
**Do not use: exports object replacement via return**
```javascript
return exports;  /* replace exports object */
```
**Do not use: exports object replacement via assignment**
```javascript
module.exports = { some_new_object };  /* replace exports object */
```

### Exports Object Decoration
**Do not use: decoration via Object.assign() with nested declaration**
```javascript
Object.assign(exports, {
  a: function a() {},
  b: function b() {},
};

Object.assign(exports, {a, b});
```

** exports object decoration via Object.assign()**
```javascript
function a() {}
function b() {};

Object.assign(exports, {a, b});
```
** exports object decoration via property assignment**
```javascript
exports.a = function a() {}
exports.b = function b() {};
```

## Whitespace

 - 2 spaces
 - no tabs (code point 9) allowed in files
 - no carriage-returns (code point 13) allowed in files
 - there are no restrictions with respect to using whitespace within statements to improve alignment between programmatic and visual symmetry
 - single-line object literals have a space after `{` and before `}`
 - parentheses are neither followed by nor preceded by inner spaces
 - `if`, `for`, and `function` keywords are always followed by a space

```javscript
if ((a + b) > (c + d))  
{  
  print("Hello, world");  
}
```

## Naming

 - File names are `kebab-case`.
 - Variable names and object property names are `camelCase`
 - Acronyms are treated like words; if we had named `window.XMLHttpRequest` at KDS, it would have been called `window.xmlHttpRequest`.
 - Class names are `CamelCaseWithUppercaseFirstCharacter`
 - Function arguments that are unused should start with _
 - "private" API or object properties should start with __
 - When a variable is used to store the value of `this`, it should be called `that` and assigned as close to the top of its scope as possible.
 - Caught exceptions should be named `error`
 
### Character Sets
- Only use the Unicode character set
- Use UTF-16 per JS norms within strings
	- A JS string is a series of 16-bit code units
	- Use `codePointAt` and friends whenever possible, rather than manipulating surrogate pairs
- Use the UTF-8 transfer encoding for source files, data on disk, network data, etc
- Use of characters above code point 127 (end of US-ASCII) in source code is discouraged, but permitted when they transmit domain-specific information (for example, using the Greek alpha symbol to represent a threshold value in a statistics module).

### Spelling
Either British, Canadian, or American English are acceptable throughout the code base, however public APIs must always use American English.

#### Referrer
Referrer is always spelling wrong - `referer`.  Don't blame me, blame Phillip Hallam-Baker.

#### Upper Case, Lower Case
Upper case and lower case are each two words.

## Braces

There are two bracing styles in use simultaneously throughout the KDS JS Style:

 - Lexical braces: always alone on a line. "Allman Style"
 - Literal braces: never alone on a line; closing braces always followed by  `,`, `)`, or `;`. "1tbs Style".

### Function Declarations
Lexical Braces.
```javascript
function helloWorld()
{
  console.log('hello, world');
}
```

### Control flow blocks
Lexical Braces. Zero-statement blocks may use both braces on one line. One-statement blocks may omit the braces unless the block is below an else statement.

```javascript
try
{
  for (let i=0; i < 10; i++)
  {
    console.log(i);
  }
}
catch(error) {}

if (Math.random() > 1)
  console.error('something very bad just happened');
```

```javascript
if (a)
  console.log('yes');
else
{
  console.log('no');
  throw new Error('uh-oh');
}
```
**Not Allowed:**
```javascript
if (!a)
{
  console.log('no');
  throw new Error('uh-oh');
}
else
  console.log('yes');
```

### Object Literals
Literal Braces. Very short objects may appear on a single line. Trailing commas in property lists are allowed by not required.
```javascript
var ballDuck = {
  type: 'base',
  color: 'white',
  stiching: { color: 'red' },
};
```

### Array Literals
Same as object literals, but use square brackets in place of literal braces.

```javascript
var a = [ 1, 2, 3 ];
var b = [ 4,
  5,
  6,
];
```
### Function Literals
Literal Braces. When combined with an assignment to a property of the module `exports` object, either Literal Braces OR Lexical Braces are permitted.

```javascript
var foo = function foo() {
  var a = [1, 2, 3];
}

var bar = () => {
  var b = [4, 5, 6];
}

module.exports.foo2 = function foo2()
{
  var a = [1, 2, 3];
}
```

## Comments
Comments should explain what the program, module, or block does.  They should not explain JavaScript syntax or APIs of other units.

-  // comments are used 
	- for linter hints, or
	- to temporarily eliminate small blocks of code during debugging. 
-   multiline comments are written
```javascript
/* information
 * more information
 */
```
-   do not comment a closing brace unless

a) the opening brace it is paired with is at the incorrect indentation level; for example, when the module.declare boilerplate is used but the module code still begins at column 0, or  
b) the opening brace is more than 50 line of code away (Note that this generally means that your program should be refactored for a flatter layout)

## General

 - All statements end in semicolons, except function declarations
 - Do not shadow function arguments
 - Avoid destructured assignment unless it adds clarity or otherwise simplifies code
 - Avoid nested destructured assignment like the plague

### Quotation marks
 - string literals should be declared with single quotes, unless they contain single quotes, in which case, they should be declared with double quotes
```javascript
console.log('hello, world');
console.log("nice day, isn't it?");
```
### Variables
 - Use of undeclared variables is not permitted unless accompanied by eslint markup and a comment
	 - comment not required for variables appearing in our `.eslintrc.js`, such as `dcpConfig` and `window`.
 - All variables, except those declared `const`, must be manually hoisted to the top of their scope
 - `var` or `const` declarations are preferred for variables which have module-wide or function scope
- "Do not touch" variables -- eg pseudo-private properties -- should begin with double underscore, `__`.
 
### Functions
- Whenever possible, functions should have names. This often means that full function syntax is preferred over lightweight (fat arrow) functions when using function literals, provided that doing so does not increase code complexity.
- Avoid closing over `const that=this`; use lightweight functions instead if that is what you need.
- Unused function arguments begin with `_`

### Iteration
 - loop invariants should be declared with `const` or `let` (never `var`) within the loop initializer whenever possible.
	 ```javascript
	 for (let i=0; i < 10; i++) {}
	 ```

#### Switch Statements
Lexical bracing may be used within case statements, provided it is used consistently throughout a given switch statement.

1. The tested expression in a switch statement must be variable. `switch (true)` is expressly prohibited.
2. All fall-through cases must be commented with the word "fallthrough" so that code-readers know the fallthrough was purposeful, *unless* there are zero statements between cases.
3. Switch statements with no default case are permitted.
4. Switch labels push the indent level.
5. A break statement is required in the last case statement.

```javascript
switch (type)
{
  case 'medicine':
    usedForFun = false; // fall-through
  case 'base':
  case 'volley':
    colour: 'white',
  case 'basket':
    round = true;
    break;
  case 'foot':
    round = false;
    break;
}
```

### Operators
Long expressions not joined by `&&` and `||` should break so the operator starts on the second line and starting in the same column as the beginning of the expression in the first line. This applies to `?:`, binary arithmetic operators including `+`, and member-of operators. Rationale: an operator at the front of the continuation line makes for faster visual scanning, as there is no need to read to the end of line. Also there exists a context-sensitive keyword hazard in JavaScript (https://bugzilla.mozilla.org/show_bug.cgi?id=442099) which can be avoided by putting `.` at the start of a continuation line, in long member expression.

`==` is preferred to `===`

Unary keyword operators, such as `typeof`, should not have their operand parenthesized; e.g. use `typeof 'foo' === 'string'`.

### Type Coersion
Types should be coerced as explicitly as possible
 - avoid use of `==` and friends, use `===` etc
 - if `==` must be used for a coerced comparison, a comment is probably warranted.
 - avoid shortcut operators like `!!abc` and `+xyz`; use `Boolean(abc)` and `Number(xyz)` instead.

## Miscellaneous Advice
### Comparisons
Always write comparisons with laser precision:
- If you want to know if x is bigger than a, use `if (x > a)`.
- If you want to know if x is not bigger than a, use `if (!(x > a))` NOT `if (x <= a)` .... unless your test also tests to make sure that both x and are  numbers which are not NaN.
 - Do not compare `x == true` or `x == false`. Use `(x)` or `(!x)` instead. `x == true`, is certainly different from if `(x)`! Compare objects to `null`, numbers to `0` or strings to `""`, if there is chance for confusion.

### Adding Methods To Standard Classes
Is never a good idea. Inherit from the standard classes instead.

### Function Chaining
Avoid multi-tier function chaining when possible.  Use intermediate variables to break up the chain. This makes it easier to inspect links in the chain with the debugger, and provides an opportunity for documentation via naming.

### Zen (mostly stolen from PEP 20)
- Beautiful is better than ugly.
- Explicit is better than implicit.
- Simple is better than complex.
- Complex is better than complicated.
- Flat is better than nested.
- Sparse is better than dense.
- Readability counts.
- Special cases aren't special enough to break the rules.
- Although practicality beats purity.
- Errors should never pass silently.
- Unless explicitly silenced.
- In the face of ambiguity, refuse the temptation to guess.
- There should be one -- and preferably only one -- obvious way to do it.
- Now is better than never.
- Although never is often better than *right* now.
- If the implementation is hard to explain, it's a bad idea.
- If the implementation is easy to explain, it may be a good idea.

## JavaScript Dialects
### ES-3 or older

There is no reason in DCP to use any JavaScript dialect which predates ES-5, including detecting excessively-old engines. You are free to pretend these do not exist unless unless you have a very, very, very specific use-case.

### ES-5 non-strict code

This code should be avoided, unless it is technically infeasible to so.  Note that source files cannot be naively converted from non-strict to strict; they must be thoroughly tested during the maintenance cycle.

#### Automatic function hoisting

Never count on automatic hoisting of functions declared in block-level statements in ES-5 non-strict code: you can create cross-browser bugs here, as the behaviour was underspecified in ES-3 and remains so in ES-5 non-strict. See [https://bugzilla.mozilla.org/show_bug.cgi?id=585536](https://bugzilla.mozilla.org/show_bug.cgi?id=585536) for a full treatise.

**Do Not Use:** this code throws a reference error in some implementations because returnData is undefined.
```javascript
exports.getGroups = function (x)  
{  
  var query = { success: returnData, error: cbFailure, method: "get", table: "Token" };  
  query.prototype = {value: x[index]};  
  
  for (let index = 0; index < x.length; index++)
  {  
    function cbFailure(res) { }  
    function returnData(data) { }  
    db.act(query);  
  }  
}  
```  

### Files
 - Begin with comment block
	 - @file - description
	 - @author - principal author(s)
	 - @date - date corresponding with start of primary work

### Node Programs
 - Do not have `.js` extension
 - Have execute permissions
 - begin with `#! /usr/bin/env node`

```javascript
## Example Program
#! /usr/bin/node
/**
 * @file        cgadm           Compute Group Administration tool
 *                              A tool for administering compute groups for scheduler sysadmins
 *
 * @author      Wes Garland, wes@kingsds.network
 * @date        June 2021
 */
'use strict';

const path      = require('path');
const process   = require('process');

async function main()
{
  var r = Math.random();
  console.log('Hello, world');

  for (let i=0; i < r*100; i++)
  {
     if (i % 3 === 0)
        console.log('hello', i);
  }  
}
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg3NjgzODE5N119
-->