export function takeWhile<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => Iterable<T>
export function takeWhile<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Iterable<T>

export function takeWhile<T>(
  pred: (arg0: T) => boolean,
  iter?: Iterable<T>
): Iterable<T> | ((arg0: Iterable<T>) => Iterable<T>) {
  function* _takeWhile(iter: Iterable<T>): Iterable<T> {
    for (const value of iter) {
      if (!pred(value)) {
        break
      }
      yield value
    }
  }

  if (iter === undefined) {
    return _takeWhile
  }

  return (function*() {
    yield* _takeWhile(iter)
  })()
}
