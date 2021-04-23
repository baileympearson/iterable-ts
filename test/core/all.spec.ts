import { all } from '../../src/core/all'

describe('any tests', () => {
    const isEven = (num: number) => num % 2 === 0

    describe('curried tests', () => {
        it('should return true if all elements satisfy the predicate', () => {
            let source = [2,4,6,8]
            let anyFunc = all(isEven)
            let result = anyFunc(source)
            expect(result).toBe(true)
        })

        it('should return false if any elements do not satisfy the predicate', () => {
            let source = [1,3,5, 6]
            let anyFunc = all(isEven)
            let result = anyFunc(source)
            expect(result).toBe(false)
        })

        it('should return true on an empty iterable', () => {
            let source: number[] = []
            let anyFunc = all(isEven)
            let result = anyFunc(source)
            expect(result).toBe(true)
        })
    })

    describe('curried tests', () => {
        it('should return true if all elements satisfy the predicate', () => {
            let source = [2,4,6,8]
            let result = all(isEven, source)
            expect(result).toBe(true)
        })

        it('should return false if any elements do not satisfy the predicate', () => {
            let source = [1,3,5,6]
            let result = all(isEven, source)
            expect(result).toBe(false)
        })

        it('should return false on an empty iterable', () => {
            let source: number[] = []
            let result = all(isEven, source)
            expect(result).toBe(true)
        })
    })
})