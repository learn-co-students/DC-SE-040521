## Scope

SCOPE - Variables can go outside-in but not inside-out {}

```js let globalVariable = "Hello"
function iteratesThroughAnArrayAndAddsOne(arrayOfNumbers) {
  let numberToAdd = 1;

  arrayOfNumbers.forEach(function (num) {
    // Yes access to num

    // Yes access to numberToAdd

    // Yes access to globalVariable

    console.log(num + numberToAdd);
  });

  // No access to num

  // Yes access to numberToAdd

  // Yes access to globalVariable
}

// No access to num

// No access to numberToAdd

// Yes access to globalVariable
```

## Functions

first-class functions:

A programming language is said to have first-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be \*\*passed as an argument to other functions, can be returned by another function and can be

functions:

A function in Javascript can be thought of as set of instructions that the computer knows and can execute. Javscript functions can work with arguments and there's no limitation on the length of the body.

callback:

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. -- MDN

- Function

- Definition VS invocation. **THIS IS SUPER IMPORTANT**

```js
function iLikePancakes() {
  console.log(
    'Pancake technology is truly incredible. What a time to be alive!'
  );
}

iLikePancakes;

// VS

iLikePancakes();
```

- Another point to note is that _functions always return undefined unless explicitly returning otherwise_. **PLEASE BURN THIS INTO YOUR MEMORY**. There is only one case of implicit returns in JavaScript and that's with one-line arrow functions without braces (more on that later).

- Functions are POJO's that can be executed/called! This means that you can add properties to functions just like you do POJO's:

```js
function functionsAreObjects() {
  return 'nice';
}

functionsAreObjects.name = 'a function object';
```

- Function expression

- This is like a function that can't live without being assigned to a variable, or a function that is defined right when it's used (as in as an argument to another function).

```js
let arr = [1, 2, 3];

let doSomething = function () {
  return true;
};

let doSomethingElse = () => false;

arr.map(function namedExpression(n) {
  return n + 1;
});
```

- Function declaration

- This is simply a variable assignment and a function expression mashed into one. It ALWAYS begins with the `function` keyword and needs a name.

```js
function doSomething() {
  return true;
}

console.log(doSomething); // f doSomething()
```

---

### Type Checking

The original way of checking types, [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof), is a little unreliable when looking at some objects like arrays, which return "object". This works best for primitive values. For example:

```js
parseInt('HOTDOG'); //NaN

typeof parseInt('HOTDOG'); //'number'

typeof NaN; //'number'
```

## Documentation

- [ECMA](https://en.wikipedia.org/wiki/Ecma_International)

- [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)

- [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

- [How to use console.log and others](https://console.spec.whatwg.org/#dir)

- [Javascript Equality Table](https://dorey.github.io/JavaScript-Equality-Table/)
