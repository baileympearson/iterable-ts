export type MapTransform<In, Out> = (arg0: Iterable<In>) => Generator<Out>
export function map<In, Out>(f: (arg0: In) => Out): MapTransform<In, Out>
export function map<In, Out>(f: (arg0: In) => Out, iter: Iterable<In>): Generator<Out>

export function map<In, Out>(
  f: (arg0: In) => Out,
  iter?: Iterable<In>
): MapTransform<In, Out> | Generator<Out> {
  function* _map(iter: Iterable<In>): Generator<Out> {
    for (const value of iter) {
      yield f(value)
    }
  }
  if (iter === undefined) {
    return _map
  }

  return (function*() {
    yield* _map(iter)
  })()
}