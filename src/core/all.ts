/**
 * Exhausts the iterable and returns true if all elements satisfy the predicate function.
 *
 * @returns A function that takes an iterable of type T.  This function exhausts the iterable and returns true if all elements satisfy the predicate.
 */
export function all<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => boolean

/**
 * Exhausts the iterable and returns true if all elements satisfy the predicate function.
 *
 * @returns true if all the elements satisfy the predicate, false otherwise
 */
export function all<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): boolean

export function all<T>(
  pred: (arg0: T) => boolean,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => boolean) | boolean {
  function _all(iter: Iterable<T>): boolean {
    for (const value of iter) {
      if (!pred(value)) {
        return false
      }
    }
    return true
  }

  if (iter === undefined) {
    return _all
  }

  return _all(iter)
}
