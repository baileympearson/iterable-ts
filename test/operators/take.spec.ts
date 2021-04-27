import { into, take } from '../../src'

describe('take tests', () => {
    describe('curried tests', () => {
        it('should yield nothing if the iterable is empty', () => {
            const source = [] as number[]
            const taker = take(5)
            const result = taker(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is negative', () => {
            const source = [1,2,3] as number[]
            const taker = take(-5)
            const result = taker(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield the full iterable if n > number of elements in source', () => {
            const source = [1,2,3] as number[]
            const taker = take(5)
            const result = taker(source)
            expect(into('array', result)).toEqual([1,2,3])
        })

        it('should only yield the first n elements of the source', () => {
            const source = [1,2,3,4,5,6] as number[]
            const taker = take(4)
            const result = taker(source)
            expect(into('array', result)).toEqual([1,2,3,4])
        })
    })

    describe('non-curried tests', () => {
        it('should yield nothing if the iterable is empty', () => {
            const source = [] as number[]
            const result = take(5, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is negative', () => {
            const source = [1,2,3] as number[]
            const result = take(-5, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield the full iterable if n > number of elements in source', () => {
            const source = [1,2,3] as number[]
            const result = take(5, source)
            expect(into('array', result)).toEqual([1,2,3])
        })

        it('should only yield the first n elements of the source', () => {
            const source = [1,2,3,4,5,6] as number[]
            const result = take(4, source)
            expect(into('array', result)).toEqual([1,2,3,4])
        })
    })
})