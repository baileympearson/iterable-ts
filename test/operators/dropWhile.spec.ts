
import { dropWhile, into } from '../../src'

describe('drop tests', () => {
    describe('curried tests', () => {
        it('should yield nothing if source iterable is empty', () => {
            const source = [] as number[]
            const dropper = dropWhile(() => true)
            const result = dropper(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if the predicate never returns false', () => {
            const source = [1,2,3,4]
            const dropper = dropWhile(() => true)
            const result = dropper(source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield the full iterable if the predicate is satisfied after the first element', () => {
            const source = [1,2,3,4]
            const dropper = dropWhile(() => false)
            const result = dropper(source)
            expect(into('array', result)).toEqual([1,2,3,4])
        })

        it('should yield all elements after the predicate evaluates false to an element', () => {
            const source = [1,2,3,4] 
            const dropper = dropWhile((x: number) => x % 2 !== 0)
            const result = dropper(source)
            expect(into('array', result)).toEqual([2,3,4])
        })
    })

    describe('non-curried tests', () => {
        it('should yield nothing if source iterable is empty', () => {
            const source = [] as number[]
            const result = dropWhile(() => true, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield nothing if the predicate never returns false', () => {
            const source = [1,2,3,4]
            const result = dropWhile(() => true, source)
            expect(into('array', result)).toEqual([])
        })

        it('should yield the full iterable if the predicate is satisfied after the first element', () => {
            const source = [1,2,3,4]
            const result = dropWhile(() => false, source)
            expect(into('array', result)).toEqual([1,2,3,4])
        })

        it('should yield all elements after the predicate evaluates false to an element', () => {
            const source = [1,2,3,4] 
            const result = dropWhile((x: number) => x % 2 !== 0, source)
            expect(into('array', result)).toEqual([2,3,4])
        })
    })
})