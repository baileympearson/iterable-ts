export function flatten<T, S>(iter1: Iterable<T>, iter2: Iterable<S>): Generator<T | S>
export function flatten<T, S, U>(
  iter1: Iterable<T>,
  iter2: Iterable<S>,
  iter3: Iterable<U>
): Generator<T | U | S>
export function flatten<T, S>(iter1: Iterable<T>, iter2: Iterable<S>): Generator<T | S>
export function flatten<A, B, C, D>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3: Iterable<C>,
  iter4: Iterable<D>
): Generator<A | B | C | D>
export function flatten<A, B, C, D, E>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3: Iterable<C>,
  iter4: Iterable<D>,
  iter5: Iterable<E>
): Generator<A | B | C | D | E>
export function flatten<A, B, C, D, E, F>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3: Iterable<C>,
  iter4: Iterable<D>,
  iter5: Iterable<E>,
  iter6: Iterable<F>
): Generator<A | B | C | D | E | F>
export function flatten<A, B, C, D, E, F, G>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3: Iterable<C>,
  iter4: Iterable<D>,
  iter5: Iterable<E>,
  iter6: Iterable<F>,
  iter7: Iterable<G>
): Generator<A | B | C | D | E | F | G>

export function flatten<A, B, C, D, E, F, G, H>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3: Iterable<C>,
  iter4: Iterable<D>,
  iter5: Iterable<E>,
  iter6: Iterable<F>,
  iter7: Iterable<G>,
  iter8: Iterable<H>
): Generator<A | B | C | D | E | F | G | H>

export function flatten<A, B, C, D, E, F, G, H, I>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3: Iterable<C>,
  iter4: Iterable<D>,
  iter5: Iterable<E>,
  iter6: Iterable<F>,
  iter7: Iterable<G>,
  iter8: Iterable<H>,
  iter9: Iterable<I>
): Generator<A | B | C | D | E | F | G | H | I>

export function* flatten<A, B, C, D, E, F, G, H, I>(
  iter1: Iterable<A>,
  iter2: Iterable<B>,
  iter3?: Iterable<C>,
  iter4?: Iterable<D>,
  iter5?: Iterable<E>,
  iter6?: Iterable<F>,
  iter7?: Iterable<G>,
  iter8?: Iterable<H>,
  iter9?: Iterable<I>
): Generator<A | B | C | D | E | F | G | H | I> {
  for (const iter of [iter1, iter2, iter3, iter4, iter5, iter6, iter7, iter8, iter9]) {
    if (iter) {
      for (const value of iter) {
        yield value
      }
    }
  }
}
