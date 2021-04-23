import { enumerate } from './enumerate'

/**
 * Removes the first n elements from the iterable
 * 
 * @returns A function that takes an iterable as a parameter.  This function removes the first n elements from an interable
 */
export function drop<T>(n: number): (arg0: Iterable<T>) => Generator<T>

/**
 * Removes the first n elements from the iterable
 * 
 * @returns The first n elements from the iterable
 */
export function drop<T>(n: number, iter: Iterable<T>): Generator<T>

export function drop<T>(
  n: number,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Generator<T>) | Generator<T> {
  function* _drop(iter: Iterable<T>): Generator<T> {
    for (const [index, value] of enumerate(iter)) {
      if (index > n) {
        yield value
      }
    }
  }

  if (iter === undefined) {
    return _drop
  }

  return (function*() {
    yield* _drop(iter)
  })()
}
