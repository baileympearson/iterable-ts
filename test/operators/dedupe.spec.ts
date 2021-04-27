import { dedupe, into } from '../../src'

describe('dedupe tests', () => {
  describe('non-curried tests', () => {
    it('should yield nothing on empty iterable', () => {
      const source = [] as number[]
      const result = dedupe(source)
      expect(into('array', result)).toEqual([])
    })

    it('should not modify an iterable if there are no duplicates', () => {
      const source = [1, 2, 3]
      const result = dedupe(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })

    it('should get rid of consecutive duplicates', () => {
      const source = [1, 1, 2, 2, 3, 3]
      const result = dedupe(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })

    it('should get rid of any non-consecutive duplicates', () => {
      const source = [1, 2, 3, 1, 2, 3]
      const result = dedupe(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })
  })

  describe('curried tests', () => {
    it('should yield nothing on empty iterable', () => {
      const deduper = dedupe()
      const source = [] as number[]
      const result = deduper(source)
      expect(into('array', result)).toEqual([])
    })

    it('should not modify an iterable if there are no duplicates', () => {
      const deduper = dedupe()
      const source = [1, 2, 3]
      const result = deduper(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })

    it('should get rid of consecutive duplicates', () => {
      const deduper = dedupe()
      const source = [1, 1, 2, 2, 3, 3]
      const result = deduper(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })

    it('should get rid of any non-consecutive duplicates', () => {
      const deduper = dedupe()
      const source = [1, 2, 3, 1, 2, 3]
      const result = deduper(source)
      expect(into('array', result)).toEqual([1, 2, 3])
    })
  })
})
