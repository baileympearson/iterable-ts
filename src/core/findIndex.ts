import { Optional, some, none } from '../utility/optional'
import { enumerate } from './enumerate'

export function findIndex<T>(pred: (arg0: T) => boolean): (arg0: Iterable<T>) => Optional<number>
export function findIndex<T>(pred: (arg0: T) => boolean, iter: Iterable<T>): Optional<number>

export function findIndex<T>(
  pred: (arg0: T) => boolean,
  iter?: Iterable<T>
): ((arg0: Iterable<T>) => Optional<number>) | Optional<number> {
  function find(iter: Iterable<T>): Optional<number> {
    for (const [index, value] of enumerate(iter)) {
      if (pred(value)) {
        return some(index)
      }
    }

    return none()
  }
  if (iter === undefined) {
    return find
  }

  return find(iter)
}
