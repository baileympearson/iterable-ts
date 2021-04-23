import { Optional, some, none } from '../utility/optional'

export function find<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => Optional<T>
export function find<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Optional<T>

export function find<T>(
  pred: (arg0: T) => boolean,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Optional<T>) | Optional<T> {
  function _find(iter: Iterable<T>): Optional<T> {
    for (const value of iter) {
      if (pred(value)) {
        return some(value)
      }
    }

    return none()
  }
  if (iter === undefined) {
    return _find
  }

  return _find(iter)
}
