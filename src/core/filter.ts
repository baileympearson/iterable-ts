/**
 * filter
 *
 * Exhausts an interable and yields only values that satisfy the prediate function.
 * Operates the same as the built-in `Array.filter` function.
 *
 * @returns A function that takes an iterable and filters it with the `pred` function.
 */
export function filter<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => Iterable<T>

/**
 * filter
 *
 * Exhausts an interable and yields only values that satisfy the prediate function.
 * Operates the same as the built-in `Array.filter` function.
 *
 * @returns An iterable of the values in `iter` that satisfy `pred`.
 */
export function filter<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T>

export function filter<T>(
  pred: (arg0: T) => boolean,
  iter?: Iterable<T>
): Iterable<T> | ((arg0: Iterable<T>) => Iterable<T>) {
  function* _filter(iter: Iterable<T>): Iterable<T> {
    for (const value of iter) {
      if (pred(value)) {
        yield value
      }
    }
  }

  if (iter === undefined) {
    return _filter
  }

  return (function*() {
    yield* _filter(iter)
  })()
}
