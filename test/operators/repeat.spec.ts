import { repeat, take, into } from '../../src'

describe('repeat tests', () => {
  it('should yield the same value infinitely, if the identity function is passed in', () => {
    const id = (value: number) => value
    const iter = repeat(0)
    const result = into('array', take(5, iter))
    expect(result).toEqual([0, 0, 0, 0, 0])
  })
})
