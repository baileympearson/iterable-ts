import { drop } from '../../src/core/drop'
import { into } from '../../src/utility/into'

describe('drop tests', () => {
    describe('curried tests', () => {
        it('should yield nothing if source iterable is empty', () => {
            const source = [] as number[]
            const dropper = drop(5)
            const result = dropper(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is negative', () => {
            const source = [1,2,3,4]
            const dropper = drop(-5)
            const result = dropper(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is greater than the number of items in the iterable', () => {
            const source = [1,2,3,4]
            const dropper = drop(5)
            const result = dropper(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is the same as the number of elements in the iterable', () => {
            const source = [1,2,3,4] 
            const dropper = drop(4)
            const result = dropper(source)
            expect(into('array', result)).toEqual([])
        })

        it('should drop the first n values from the source iterable', () => {
            const source = [1,2,3,4] 
            const dropper = drop(2)
            const result = dropper(source)
            expect(into('array', result)).toEqual([3,4])
        })
    })

    describe('non-curried tests', () => {
        it('should yield nothing if source iterable is empty', () => {
            const source = [] as number[]
            const result = drop(5, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is negative', () => {
            const source = [1,2,3,4]
            const result = drop(-5, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is greater than the number of items in the iterable', () => {
            const source = [1,2,3,4]
            const result = drop(5, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if n is the same as the number of elements in the iterable', () => {
            const source = [1,2,3,4] 
            const result = drop(4, source)
            expect(into('array', result)).toEqual([])
        })

        it('should drop the first n values from the source iterable', () => {
            const source = [1,2,3,4] 
            const result = drop(2, source)
            expect(into('array', result)).toEqual([3,4])
        })
    })
})