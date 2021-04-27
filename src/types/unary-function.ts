
/**
 * A type representing a single-argument function.
 * 
 * @typeParam In the type of the parameter
 * @typeParam Out the return type of the function
 */
export type UnaryFunction<In, Out> = (arg0: In) => Out