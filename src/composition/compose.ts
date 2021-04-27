import { UnaryFunction } from '../types/unary-function'

export function compose<A, B, Out>(
  fn1: UnaryFunction<B, Out>,
  fn2: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, Out>(
  fn1: UnaryFunction<C, Out>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, D, Out>(
  fn1: UnaryFunction<D, Out>,
  fn2: UnaryFunction<C, D>,
  fn3: UnaryFunction<B, C>,
  fn4: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, D, E, Out>(
  fn1: UnaryFunction<E, Out>,
  fn2: UnaryFunction<D, E>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<B, C>,
  fn5: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, D, E, F, Out>(
  fn1: UnaryFunction<F, Out>,
  fn2: UnaryFunction<E, F>,
  fn3: UnaryFunction<D, E>,
  fn4: UnaryFunction<C, D>,
  fn5: UnaryFunction<B, C>,
  fn6: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, D, E, F, G, Out>(
  fn1: UnaryFunction<G, Out>,
  fn2: UnaryFunction<F, G>,
  fn3: UnaryFunction<E, F>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<C, D>,
  fn6: UnaryFunction<B, C>,
  fn7: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, D, E, F, G, H, Out>(
  fn1: UnaryFunction<H, Out>,
  fn2: UnaryFunction<G, H>,
  fn3: UnaryFunction<F, G>,
  fn4: UnaryFunction<E, F>,
  fn5: UnaryFunction<D, E>,
  fn6: UnaryFunction<C, D>,
  fn7: UnaryFunction<B, C>,
  fn8: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<A, B, C, D, E, F, G, H, I, Out>(
  fn1: UnaryFunction<I, Out>,
  fn2: UnaryFunction<H, I>,
  fn3: UnaryFunction<G, H>,
  fn4: UnaryFunction<F, G>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<D, E>,
  fn7: UnaryFunction<C, D>,
  fn8: UnaryFunction<B, C>,
  fn9: UnaryFunction<A, B>
): UnaryFunction<A, Out>

export function compose<In, Out>(...fns: UnaryFunction<any, any>[]): UnaryFunction<In, Out> {
  fns.reverse()
  return (value: In) => (fns.reduce((accum, func) => func(accum), value) as any) as Out
}
