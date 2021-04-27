import { UnaryFunction } from './unary-function';

/**
 * A type representing a predicate function.
 * 
 * @typeParam T the input type of the function
 */
export type PredicateFunction<T> = UnaryFunction<T, boolean>