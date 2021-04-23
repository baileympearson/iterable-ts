import { range } from '../utility/range'
import { zip2 } from './zip2'

/**
 * enumerate
 * 
 * Converts a regular iterable into an indexed iterable.
 * 
 * @returns Pairs, where the first value in the pair is index and the second is the value
 */
export function enumerate<T>(iter: Iterable<T>): Iterable<[number, T]>

export function* enumerate<T>(iter: Iterable<T>): Iterable<[number, T]> {
  for (const value of zip2(range(), iter)) {
    yield value
  }
}
