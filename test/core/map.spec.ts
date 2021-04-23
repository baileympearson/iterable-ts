import { into } from '../../src/utility'
import { map } from '../../src/core/map'

function id<T>(value: T) {
  return value
}

describe('test of map', () => {
  function double(val: number): number {
    return val * 2
  }

  describe('non-curried version', () => {
    it('should do nothing to an empty generator', () => {
      const source: string[] = []
      const expected: string[] = []
      const result = map(id, source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should preserve identity', () => {
      const source = [1, 2, 3]
      const expected = [1, 2, 3]
      const result = map(id, source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should apply f to values in the iterable', () => {
      const source = [1, 2, 3]
      const expected = [2, 4, 6]
      const result = map(double, source)
      expect(into('array', result)).toEqual(expected)
    })
  })

  describe('curried version', () => {
    it('should do nothing to an empty generator', () => {
      const source: string[] = []
      const expected: string[] = []
      const mapper = map(id)
      const result = mapper(source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should preserve identity', () => {
      const source = [1, 2, 3]
      const expected = [1, 2, 3]
      const mapper = map(id)
      const result = mapper(source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should apply f to values in the iterable', () => {
      const source = [1, 2, 3]
      const expected = [2, 4, 6]
      const mapper = map(double)
      const result = mapper(source)
      expect(into('array', result)).toEqual(expected)
    })

    it('should be able to re-use mapper', () => {
      const source = [1, 2, 3]
      const expected = [2, 4, 6]
      const mapper = map(double)
      const result = mapper(source)
      expect(into('array', result)).toEqual(expected)
      const result2 = mapper(source)
      expect(into('array', result2)).toEqual(expected)
    })
  })
})
