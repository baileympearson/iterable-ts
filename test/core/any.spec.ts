import { any } from '../../src/core/any'

describe('any tests', () => {
    const isEven = (num: number) => num % 2 === 0

    describe('curried tests', () => {
        it('should return true if any elements satisfy the predicate', () => {
            let source = [1,2,3,4,5]
            let anyFunc = any(isEven)
            let result = anyFunc(source)
            expect(result).toBe(true)
        })

        it('should return false if no elements satisfy the predicate', () => {
            let source = [1,3,5]
            let anyFunc = any(isEven)
            let result = anyFunc(source)
            expect(result).toBe(false)
        })

        it('should return false for an empty iterable', () => {
            let source: number[] = []
            let anyFunc = any(isEven)
            let result = anyFunc(source)
            expect(result).toBe(false)
        })
    })

    describe('non-curried tests', () => {
        it('should return true if any elements satisfy the predicate', () => {
            let source = [1,2,3,4,5]
            let result = any(isEven, source)
            expect(result).toBe(true)
        })

        it('should return false if no elements satisfy the predicate', () => {
            let source = [1,3,5]
            let result = any(isEven, source)
            expect(result).toBe(false)
        })

        it('should return false for an empty iterable', () => {
            let source: number[] = []
            let result = any(isEven, source)
            expect(result).toBe(false)
        })
    })
})