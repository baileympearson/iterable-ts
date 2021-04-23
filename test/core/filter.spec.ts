import { filter } from '../../src/core/filter'
import { into } from '../../src/utility'

describe('tests for filter', () => {
  function all<T>(val: T): boolean {
    return true
  }

  describe('curried version', () => {
    it('should do nothing to an empty iterable', () => {
      const source: string[] = []
      const expected: string[] = []
      const filter_func = filter(all)
      const result = filter_func(source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should filter no elements if nothing satisfies the predicate', () => {
      const greaterThanZero = (x: number) => x > 0
      const source = [1, 2, 3]
      const expected = [1, 2, 3]
      const filter_func = filter(greaterThanZero)
      const result = filter_func(source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should leave all elements if all satisfy the predicate', () => {
      const equalToZero = (x: number) => x === 0
      const source = [1, 2, 3]
      const expected: number[] = []
      const filter_func = filter(equalToZero)
      const result = filter_func(source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should keep any elements that satisfy the predicate', () => {
      const isEven = (x: number) => x % 2 === 0
      const source = [1, 2, 3, 4, 5]
      const expected = [2, 4]
      const filter_func = filter(isEven)
      const result = filter_func(source)
      expect(into('array', result)).toEqual(expected)
    })
  })

  describe('non-curried version', () => {})
  it('should do nothing to an empty iterable', () => {
    const source: string[] = []
    const expected: string[] = []
    const result = filter(all, source)
    expect(into('array', result)).toEqual(expected)
  })

  it('should filter no elements if nothing satisfies the predicate', () => {
    const greaterThanZero = (x: number) => x > 0
    const source = [1, 2, 3]
    const expected = [1, 2, 3]
    const result = filter(greaterThanZero, source)
    expect(into('array', result)).toEqual(expected)
  })

  it('should leave all elements if all satisfy the predicate', () => {
    const equalToZero = (x: number) => x === 0
    const source = [1, 2, 3]
    const expected: number[] = []
    const result = filter(equalToZero, source)
    expect(into('array', result)).toEqual(expected)
  })

  it('should keep any elements that satisfy the predicate', () => {
    const isEven = (x: number) => x % 2 === 0
    const source = [1, 2, 3, 4, 5]
    const expected = [2, 4]
    const result = filter(isEven, source)
    expect(into('array', result)).toEqual(expected)
  })
})
