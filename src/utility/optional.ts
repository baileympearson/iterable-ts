export interface Some<T> {
  type: 'some'
  data: T
}

export interface None {
  type: 'none'
}

export type Optional<T> = Some<T> | None


/**
 * Constructs an object of the `Some` type
 * 
 * @returns a `some` object, containing the parameter as its data
 */
export function some<T>(data: T): Some<T> {
  return {
    type: 'some',
    data
  }
}

/**
 * none
 * 
 * @remarks
 * Constructs an object of the `None` type
 * 
 * @returns a `none` object.
 */
export function none(): None {
  return {
    type: 'none'
  }
}

/**
 * is_some
 * 
 * A function to determine if an object is a `Some` object.  This function is a 
 *  type assertion, to allow for strong type inference in if statements and switch statements.
 * 
 * @param opt an object of type `Optional`
 * @returns true if the object is a `Some` object, otherwise false
 */
export function is_some<T>(opt: Optional<T>): opt is Some<T> {
  return opt.type === 'some'
}

/**
 * is_none
 * 
 * A function to determine if an object is a `None` object.  This function is a 
 *  type assertion, to allow for strong type inference in if statements and switch statements.
 * 
 * @param opt an object of type `Optional`
 * @returns true if the object is a `None` object, otherwise false
 */
export function is_none<T>(opt: Optional<T>): opt is None {
  return opt.type === 'none'
}
