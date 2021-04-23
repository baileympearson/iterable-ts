import { enumerate } from './enumerate'

export function take<T>(num: number): (arg0: Iterable<T>) => Generator<T>
export function take<T>(num: number, iter: Iterable<T>): Generator<T>

export function take<T>(
  num: number,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Generator<T>) | Generator<T> {
  function* _take(iter: Iterable<T>): Generator<T> {
    for (const [index, value] of enumerate(iter)) {
      if (index >= num) {
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
