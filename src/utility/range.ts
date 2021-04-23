function* _range(start: number, stop: number, step: number) {
  if (step < 0) {
    for (let i = start; i > stop; i += step) {
      yield i
    }
  } else {
    for (let i = start; i < stop; i += step) {
      yield i
    }
  }
}

export function range(): Generator<number>
export function range(stop: number): Generator<number>
export function range(start: number, stop: number): Generator<number>
export function range(start: number, stop: number, step: number): Generator<number>

export function* range(startStop?: number, stop?: number, step?: number): Generator<number> {
  const _step = step === undefined ? 1 : step
  const _stop = stop === undefined ? (startStop === undefined ? Infinity : startStop) : stop
  const _start = startStop === undefined ? 0 : stop === undefined ? 0 : startStop

  yield* _range(_start, _stop, _step)
}
