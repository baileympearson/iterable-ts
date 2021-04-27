import { takeWhile, into } from '../../src'

describe('takeWhile tests', () => {
  describe('curried tests', () => {
    it('should yield nothing if the iterable is empty', () => {
      const source = [] as number[]
      const takeWhiler = takeWhile(() => true)
      const result = takeWhiler(source)
      expect(into('array', result)).toEqual([])
    })

    it('should yield nothing if the predicate function immediately returns false', () => {
      const source = [1, 2, 3] as number[]
      const takeWhiler = takeWhile(() => false)
      const result = takeWhiler(source)
      expect(into('array', result)).toEqual([])
    })

    it('should yield the full iterable if the predicate is satisfied for every element', () => {
      const source = [1, 2, 3, 4, 5, 6] as number[]
      const takeWhiler = takeWhile((x: number) => x > 0)
      const result = takeWhiler(source)
      expect(into('array', result)).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should only yield elements until the prediate evaluates to false', () => {
      const source = [1, 2, 3, 4, 5, 6] as number[]
      const takeWhiler = takeWhile((x: number) => x < 4)
      const result = takeWhiler(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })
  })

  describe('non-curried tests', () => {
    it('should yield nothing if the iterable is empty', () => {
      const source = [] as number[]
      const result = takeWhile(() => true, source)
      expect(into('array', result)).toEqual([])
    })

    it('should yield nothing if the predicate function immediately returns false', () => {
      const source = [1, 2, 3] as number[]
      const result = takeWhile(() => false, source)
      expect(into('array', result)).toEqual([])
    })

    it('should yield the full iterable if the predicate is satisfied for every element', () => {
      const source = [1, 2, 3, 4, 5, 6] as number[]
      const result = takeWhile((x: number) => x > 0, source)
      expect(into('array', result)).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should only yield elements until the prediate evaluates to false', () => {
      const source = [1, 2, 3, 4, 5, 6] as number[]
      const result = takeWhile((x: number) => x < 4, source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })
  })
})
