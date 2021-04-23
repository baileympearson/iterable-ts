import { into } from '../../src/utility'

function* makeIter(num: number) {
  for (let i = 0; i < num; ++i) {
    yield i
  }
}

describe('into tests', () => {
  describe('array test, curried version', () => {
    const arrayMaker = into('array')
    it('should produce an empty array for an empty iterable', () => {
      const source = makeIter(0)
      const result = arrayMaker(source)
      expect(result).toEqual([])
    })

    it('should produce an array with the elements in the iterable', () => {
      const source = makeIter(5)
      const result = arrayMaker(source)
      expect(result).toEqual([0, 1, 2, 3, 4])
    })
  })

  describe('array test, non-curried version', () => {
    it('should produce an empty array for an empty iterable', () => {
      const source = makeIter(0)
      const result = into('array', source)
      expect(result).toEqual([])
    })

    it('should produce an array with the elements in the iterable', () => {
      const source = makeIter(5)
      const result = into('array', source)
      expect(result).toEqual([0, 1, 2, 3, 4])
    })
  })

  describe('set test, curried version', () => {
    const arrayMaker = into('set')
    it('should produce an empty array for an empty iterable', () => {
      const source = makeIter(0)
      const result = arrayMaker(source)
      expect(result).toEqual(new Set())
    })

    it('should produce an array with the elements in the iterable', () => {
      const source = makeIter(5)
      const result = arrayMaker(source)
      expect(result).toEqual(new Set([0, 1, 2, 3, 4]))
    })
  })

  describe('array test, non-curried version', () => {
    it('should produce an empty array for an empty iterable', () => {
      const source = makeIter(0)
      const result = into('set', source)
      expect(result).toEqual(new Set())
    })

    it('should produce an array with the elements in the iterable', () => {
      const source = makeIter(5)
      const result = into('set', source)
      expect(result).toEqual(new Set([0, 1, 2, 3, 4]))
    })
  })
})
