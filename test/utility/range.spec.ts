import { range } from '../../src/utility/range'

describe('range tests', () => {
  it('should produce an infinite stream starting at 0 when passed no parameters', () => {
    let _range = range()
    expect(_range.next().value).toBe(0)
    expect(_range.next().value).toBe(1)
    expect(_range.next().value).toBe(2)
    expect(_range.next().value).toBe(3)
  })

  it('should produce a range up to stop if only one param is passed in', () => {
    let _range = range(4)
    let i = 0
    for (const value of _range) {
      expect(value).toBe(i)
      i++
    }
    expect(_range.next().value).toBeUndefined()
    expect(_range.next().done).toBe(true)
  })

  it('should produce a range down to the specified number if only a negative number is passed in', () => {
    let _range = range(-4)
    let i = 0
    for (const value of _range) {
      expect(value).toBe(i)
      i--
    }
    expect(_range.next().value).toBeUndefined()
    expect(_range.next().done).toBe(true)
  })

  it('should produce nothing if only zero is passed in', () => {
    let _range = range(0)
    for (const value of _range) {
      expect(true).toBeFalsy()
    }
    expect(_range.next().value).toBeUndefined()
    expect(_range.next().done).toBe(true)
  })

  describe('two parameters', () => {
    it('should produce a range between the two params passed in, second parameter not inclusive', () => {
      let _range = range(0, 5)
      let i = 0
      for (const value of _range) {
        expect(value).toBe(i)
        i++
      }
      expect(i).toBe(5)
      expect(_range.next().value).toBeUndefined()
      expect(_range.next().done).toBe(true)
    })

    it('produces nothing if stop is less than step', () => {
        let _range = range(0, -5)
        let i = 0
        for (const value of _range) {
          expect(value).toBe(i)
          i++
        }
        expect(i).toBe(0)
        expect(_range.next().value).toBeUndefined()
        expect(_range.next().done).toBe(true)
    })

    it('produces nothing if stop is equal to start', () => {
        let _range = range(0, 0)
        for (const value of _range) {
          expect(true).toBeFalsy()
        }
        expect(_range.next().value).toBeUndefined()
        expect(_range.next().done).toBe(true)

        _range = range(5, 5)
        for (const value of _range) {
          expect(true).toBeFalsy()
        }
        expect(_range.next().value).toBeUndefined()
        expect(_range.next().done).toBe(true)
    })
  })

  describe('three parameters', () => {
  })
})
