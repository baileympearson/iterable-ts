export interface Some<T> {
  type: 'some'
  data: T
}

export interface None {
  type: 'none'
}

export type Optional<T> = Some<T> | None

export function some<T>(data: T): Some<T> {
  return {
    type: 'some',
    data
  }
}

export function none(): None {
  return {
    type: 'none'
  }
}

export function is_some<T>(opt: Optional<T>): opt is Some<T> {
  return opt.type === 'some'
}

export function is_none<T>(opt: Optional<T>): opt is None {
  return opt.type === 'none'
}
