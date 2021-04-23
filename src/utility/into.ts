/**
 * into('array')
 * 
 * Exhausts the source iterable and returns all values from the interable in an array.
 * 
 * @returns A function that can be used to convert from the source iterable to an array
 */
export function into<T>(structure: 'array'): (arg0: Iterable<T>) => T[]

/**
 * into('array', iter)
 * 
 * Exhausts the source iterable and returns all values from the interable in an array.
 * 
 * @returns An array of all elements in the source iterable.
 */
export function into<T>(structure: 'array', iter: Iterable<T>): T[]

/**
 * into('set')
 * 
 * Exhausts the source iterable and returns all values from the interable in an set.
 * 
 * @returns A function that can be used to convert from the source iterable to set.
 */
export function into<T>(structure: 'set'): (arg0: Iterable<T>) => Set<T>

/**
 * into('set', iter)
 * 
 * Exhausts the source iterable and returns all values from the interable in a set.
 * 
 * @returns A set of all elements in the source iterable.
 */
export function into<T>(structure: 'set', iter: Iterable<T>): Set<T>

export function into<T>(
  structure: 'array' | 'set',
  iter?: Iterable<T>
): T[] | ((arg0: Iterable<T>) => T[]) | Set<T> | ((arg0: Iterable<T>) => Set<T>) {
  if (iter === undefined && structure === 'array') {
    return (arg0: Iterable<T>) => Array.from(arg0)
  } else if (iter === undefined && structure === 'set') {
    return (arg0: Iterable<T>) => new Set(arg0)
  } else if (iter !== undefined && structure === 'array') {
    return Array.from(iter)
  }

  return new Set(iter)
}
