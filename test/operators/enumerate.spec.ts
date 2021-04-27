import { enumerate, into } from '../../src'

describe('enumerate tests', () => {
  it('produces nothing for an empty iterable', () => {
    let source = [] as number[]
    let result = into('array', enumerate(source))
    expect(result).toEqual([])
  })

  it('should produce indexed tuples of the original iterator', () => {
    let source: string[] = ['a', 'b', 'c']
    let result = into('array', enumerate(source))
    expect(result).toEqual([
      [0, 'a'],
      [1, 'b'],
      [2, 'c']
    ])
  })
})
