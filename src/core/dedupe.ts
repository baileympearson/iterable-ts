function* _dedupe<T>(iter: Iterable<T>): Generator<T> {
  const values = new Set()
  for (const value of iter) {
    if (!values.has(value)) {
      values.add(value)
      yield value
    }
  }
}

/**
 * dedupe
 *
 * A curried verison of the dedupe operator.  This overload takes no parameters
 * and returns an operator that can be used to filter out any duplicate values in
 * an iterable.
 *
 * @returns An iterable that contains only the first of each distinct value.
 */
export function dedupe<T>(): (arg0: Iterable<T>) => Generator<T>

/**
 * dedupe
 *
 * @returns An iterable that contains only the first of each distinct value.
 */
export function dedupe<T>(iter: Iterable<T>): Generator<T>

export function dedupe<T>(
  iter?: Iterable<T>
): Generator<T> | ((arg0: Iterable<T>) => Generator<T>) {
  if (iter === undefined) {
    return _dedupe
  }

  return (function*() {
    yield* _dedupe(iter)
  })()
}
