import { enumerate } from './enumerate'

export function take<T>(n: number): (arg0: Iterable<T>) => Generator<T>
export function take<T>(n: number, iter: Iterable<T>): Generator<T>

export function take<T>(
  n: number,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Generator<T>) | Generator<T> {
  function* _take(iter: Iterable<T>): Generator<T> {
    if (n < 0) {
      return
    }
    for (const [index, value] of enumerate(iter)) {
      if (index >= n) {
        break
      }
      yield value
    }
  }
  if (iter === undefined) {
    return _take
  }

  return (function*() {
    yield* _take(iter)
  })()
}
