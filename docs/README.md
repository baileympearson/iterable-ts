functional-programming-library / [Exports](modules.md)

# functional-ts

## What is functional-ts?

functional-ts is a simple, flexible library for working with syncronous iterators in Javascript. The intention
is to provide a small set of functions that can operate on all iterators and iterables. There are other libraries 
that provide similar functionality, but I found none that satisfied the following design goals (so naturally, I 
reinvented the wheel)

### Prioritizes reusability and composability

Many libraries, such as wu.js, rely on method chaining.  This is inherently less composible than free functions.  For 
example, consider the following using wu.js:

```js
const source = [1,2,3]
const result = wu(source).map(x => x * 2).filter(x => x > 5)
for (const value in result) {
  console.log(result)
}
```
The source (`wu(source)`) is inherently coupled to the logic (`map(x => x * 2).filter(x => x > 5)`).  Suppose we wanted
to reuse the logic of filtering out all doubled values that are greater than 5.  In wu, we'd have to abstract this to
a function

```js
function doubledGreaterThan5(source) {
  return wu(source).map(x => x * 2).filter(x => x > 5)
}
```

We can then use it as follows:

```js
const source = [1,2,3]
const result = doubledGreaterThan5(source)
for (const value in result) {
  console.log(result)
}
```

Compare this to the curried, free function version:

```ts
// declare the same function as before
const doubledGreaterThan5 = compose(
  filter(x => x > 5),
  map(x => x * 2)
)
const source = [1,2,3]
const result = doubledGreaterThan5(source)
for (const value in source) {
  console.log(result)
}
```

- Uses the concept of iterators as its base abstraction

Some libraries, such as rambda.js, use more complicated functional programming constructs as the base abstraction.  For 
example, the `map` function in rambda.js takes a `Functor` and returns a "`Functor` of the same shape".  In a flexible, 
interpreted language like Javascript, I wanted to model the library off of the approach of Clojure.  Every standard
function returns an iterable, which can be turned into native Javascript structures as desired.

```ts
map(x => x * 2, range(5))                   // Generator<number>
into('array', map(x => x * 2, range(5)))    // [0, 2, 4, 6, 8]
```

## Installation

notes to follow here

## Why use functional-ts?

functional-ts is intended to be more flexible than the native iterator operations. All the functions
included operate solely on Iterables and therefore work on all iterable types. For example:

```ts
const arr = [1, 2, 3, 4]
const set = new Set([1, 2, 3, 4])
function* iterable() {
  yield 1
  yield 2
  yield 3
  yield 4
}

const double = (x: number) => x * 2

// all of the following are valid
map(double, arr)
map(double, set)
map(double, iterable)
```

Since all the core operations produce iterables, a utility function is provided
to easily convert iterables into native Javascript data structures:

```ts
function* iterable() {
  yield 1
  yield 2
  yield 3
}
into('array', iterable) // [1,2,3]
into('set', iterable) // Set(1,2,3)
```

## Examples

Here I attempt to illustrate the power versitility and power of functional-ts. Not all of these examples are
as clean or immediatley understandable as their imperitive counterparts.

### Print the first 50 fibonacci numbers

```ts
const first_50 = thread([0,1]
    iterate(([a, b]) => [b, a + b]),
    take(50))
forEach(first_50, console.log)
```

### Build testable, composible logic pipelines

```ts
// print the first 10 even fibonacci numbers after the first 10 odd fibonacci numbers and square them
const skipTenOdd = compose(
  map(([value, _]) => value),
  skipWhile(([value, count]) => count < 10),
  scan((n: number, accum: number) => {
    if (n % 2 === 0) {
      return accum
    }
    return accoum + 1
  }, 0)
)

const pipeline = compose(
  map((x: number) => x * x),
  take(10),
  skipTenOdd
)
const fib = iterate(([a, b]) => [b, a + b], [0, 1])

forEach(pipeline(fib), console.log)

// if you don't like the forEach operator, you can use iterators with the for..of loop
for (const value of pipeline(fib)) {
  console.log(value)
}
```

### Remove duplicates from iterable (ignoring order)

```ts
const dedupe = compose(into('array'), into('set'))
dedupe([1, 1, 2, 3, 4, 4, 4, 5, 6]) // [1, 2, 3, 4, 5, 6] (order not guaranteed)
```

### Remove duplciates from iterable (preserving order)

```ts
function* dedupe<T>(iter: Iterable<T>): Iterable<T> {
  const values = new Set()
  for (const value of iter) {
    if (!values.has(value)) {
      values.add(value)
      yield value
    }
  }
}
```

### Build logic pipelines

```ts
interface User {
  name: string
  age: number
}

const firstOver23 = find((user: User) => user.age > 21)

// print NAME:age for all users over 21.  useful? probably not.
//    illustrative of the flexibility of compose? probably.
const pipeline = compose(
  map(({ name, age}: User) => `${name}:${age}`)
  map((user: User) => { ...user, name: user.name.toUpperCase() })
  firstOver32
)
```

### Combine multiple different sources into a single iterable

```ts
const source1 = [1, 2, 3, 4]
const source2 = ['a', 'b', 'c']
const source3 = new Set('hello', 'world')

flatten(source1, source2, source3) // 1,2,3,4,'a','b','c','hello','world'
interleave(source1, source2)        // 1, 'a', 2, 'b', 3, 'c'
zip2(source1, source2)              // [1, 'a'], [2, 'b'], [3, 'c']
```
