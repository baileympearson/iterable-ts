/**
 * Combines two iterables into a single iterable. yields pairs of values 
 * 
 * @returns pairs in the form `[value1, value2]`
 */
export function* zip2<T, S>(iter1: Iterable<T>, iter2: Iterable<S>): Generator<[T, S]> {
  const [it1, it2] = [iter1[Symbol.iterator](), iter2[Symbol.iterator]()]
  let value1 = it1.next()
  let value2 = it2.next()

  while (!value1.done && !value2.done) {
    yield [value1.value, value2.value]
    value1 = it1.next()
    value2 = it2.next()
  }
}
