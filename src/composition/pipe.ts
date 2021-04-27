import { UnaryFunction } from '../types/unary-function'

export function pipe<A, Out>(f1: UnaryFunction<A, Out>): UnaryFunction<A, Out>

export function pipe<A, B, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, D, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, D>,
  f4: UnaryFunction<D, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, D, E, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, D>,
  f4: UnaryFunction<D, E>,
  f5: UnaryFunction<E, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, D, E, F, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, D>,
  f4: UnaryFunction<D, E>,
  f5: UnaryFunction<E, F>,
  f6: UnaryFunction<F, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, D, E, F, G, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, D>,
  f4: UnaryFunction<D, E>,
  f5: UnaryFunction<E, F>,
  f6: UnaryFunction<F, G>,
  f7: UnaryFunction<G, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, D, E, F, G, H, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, D>,
  f4: UnaryFunction<D, E>,
  f5: UnaryFunction<E, F>,
  f6: UnaryFunction<F, G>,
  f7: UnaryFunction<G, H>,
  f8: UnaryFunction<H, Out>
): UnaryFunction<A, Out>

export function pipe<A, B, C, D, E, F, G, H, I, Out>(
  f1: UnaryFunction<A, B>,
  f2: UnaryFunction<B, C>,
  f3: UnaryFunction<C, D>,
  f4: UnaryFunction<D, E>,
  f5: UnaryFunction<E, F>,
  f6: UnaryFunction<F, G>,
  f7: UnaryFunction<G, H>,
  f8: UnaryFunction<H, I>,
  f9: UnaryFunction<I, Out>
): UnaryFunction<A, Out>

export function pipe<In, Out>(...fns: UnaryFunction<any, any>[]): UnaryFunction<In, Out> {
  return (value: In) => {
    return (fns.reduce((accum, func) => func(accum), value) as any) as Out
  }
}
