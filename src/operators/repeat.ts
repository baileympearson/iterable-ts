import { iterate } from "./iterate";

/**
 * repeat
 * 
 * Produces an infinite iterable, yielding the given value over and over again
 * 
 * @returns An infinite iterable of the provided value
 */
export function* repeat<T>(value: T): Generator<T> {
  yield* iterate(x => x, value)
}
