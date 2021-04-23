/**
 * iterate
 *
 * @returns infinite sequence of func(seed), func(func(seed)), func(func(func(seed))), ...
 */
export function* iterate<T>(func: (arg0: T) => T, seed: T): Generator<T> {
  let initial = func(seed)
  for (;;) {
    yield initial
    initial = func(seed)
  }
}