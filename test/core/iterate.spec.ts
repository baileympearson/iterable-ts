import { iterate } from '../../src/core/iterate'
import { take } from '../../src/core/take'
import { into } from '../../src/utility'

describe('iterate tests', () => {
    it('should yield the same value infinitely, if the identity function is passed in', () => {
        const id = (value: number) => value
        const iter = iterate(id, 0)
        const result = into('array', take(5, iter))
        expect(result).toEqual([0,0,0,0,0])
    })

    it('should yield f(x), f(f(x)), ... for a given function f and a seed x', () => {
        const inc = (value: number) => value + 1
        const iter = iterate(inc, 0)
        const result = into('array', take(5, iter))
        expect(result).toEqual([1,2,3,4,5])
    })
})