import { findIndex } from '../../src/core/findIndex'
import { none, some } from '../../src/utility'

describe('findIndex tests', () => {
    const isEven = (num: number) => num % 2 === 0
    describe('curried version', () => {
        it('should return nothing if the iterable is empty', () => {
            const source = [] as number[]
            const finder = findIndex(isEven)
            const result = finder(source)
            expect(result).toEqual(none())
        })

        it('should return none if no item is found', () => {
            const source = [1,3,5,7] as number[]
            const finder = findIndex(isEven)
            const result = finder(source)
            expect(result).toEqual(none())
        })

        it('should return the index of the first item found', () => {
            const source = [1,3,4,7] as number[]
            const finder = findIndex(isEven)
            const result = finder(source)
            expect(result).toEqual(some(2))
        })
    })

    describe('non-curried version', () => {
        it('should return nothing if the iterable is empty', () => {
            const source = [] as number[]
            const result = findIndex(isEven, source)
            expect(result).toEqual(none())
        })

        it('should return none if no item is found', () => {
            const source = [1,3,5,7] as number[]
            const result = findIndex(isEven, source)
            expect(result).toEqual(none())
        })

        it('should return the index of the first item found', () => {
            const source = [1,3,4,7] as number[]
            const result = findIndex(isEven, source)
            expect(result).toEqual(some(2))
        })
    })
})