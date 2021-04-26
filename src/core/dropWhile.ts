/**
 * dropWhile
 * 
 * Removes elements from the iterable while the predicate returns true.
 * 
 * @returns A function that will consume an iterable until the predicate function returns false, then yields the rest of the iterable.
 */
export function dropWhile<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => Iterable<T>

/**
 * dropWhile
 * 
 * Removes elements from the iterable while the predicate returns true.
 * 
 * @returns All elements in the source iterable after the predicate initially returns false.
 */
export function dropWhile<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T>

export function dropWhile<T>(
  pred: (arg0: T) => boolean,
  iter?: Iterable<T>
): Iterable<T> | ((arg0: Iterable<T>) => Iterable<T>) {
  function* _dropWhile(iter: Iterable<T>): Iterable<T> {
    let hasPredicatePassed = false
    for (const value of iter) {
      if (!pred(value)) {
        hasPredicatePassed = true
      }
      if (hasPredicatePassed) {
        yield value
      }
    }
  }

  if (iter === undefined) {
    return _dropWhile
  }

  return (function*() {
    yield* _dropWhile(iter)
  })()
}