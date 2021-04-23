# functional-ts

## What is functional-ts?

functional-ts is a simple, flexible library for working with syncronous iterators in Javascript. The intention
is to provide a small set of functions that can operate on all iterators and iterables. A couple of design notes:

- This library provides free functions. Unlike other libraries, complex operator chains are built from composition of
  functions rather than method chaining. This means that there are no concepts to learn in this library other than
  the functions contained.

- The library is not optimized for performance. Out of the box, iterators have performance benefits over raw
  collection operators (such as `Array.map`), but I made no effort to optimize further. This is intended as learning
  experience - optimization might come later.

- Many of the provided functions are curried. This is to increase composability and reusibility of operators.

- Some functions return a custom defined `Optional` type.

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

// find the first user over 21
const firstOver23 = find((user: User) => user.age > 21)
```

### Combine multiple different sources into a single iterable

```ts
const source1 = [1, 2, 3, 4]
const source2 = ['a', 'b', 'c']
const source3 = new Set('hello', 'world')

flatten(source1, source2, source3) // 1,2,3,4,'a','b','c','hello','world'
```
