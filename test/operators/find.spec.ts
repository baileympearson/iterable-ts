
import { none, some, find } from '../../src';

describe('find tests', () => {
    const isEven = (num: number) => num % 2 === 0

    describe('curried tests', () => {
        it('should return a function to find a particular element', () => {
            let source = [1,2,3,4,5]
            let evenFinder = find(isEven)
            let result = evenFinder(source)
            expect(result).toEqual(some(2))
        })

        it('should return a function that can be called multiple times', () => {
            let source = [1,2,3,4,5]
            let evenFinder = find(isEven)
            let result = evenFinder(source)
            expect(result).toEqual(some(2)) 
            let result2 = evenFinder(source)
            expect(result2).toEqual(some(2)) 
        })

        it('should return a function that returns none when it cannot find an element', () => {
            let source = [1,3,5]
            let evenFinder = find(isEven)
            let result = evenFinder(source)
            expect(result).toEqual(none())  
        })

        it('should return none on an empty iterable', () => {
            let source: number[] = []
            let evenFinder = find(isEven)
            let result = evenFinder(source)
            expect(result).toEqual(none())  
        })
    })

    describe('non-curried tests', () => {
        it('should find the first element in the iterable', () => {
            let source = [1,2,3,4,5]
            let result = find(isEven, source)
            expect(result).toEqual(some(2))
        })

        it('should return none if there are no matches in the iterable', () => {
            let source = [1,3,5]
            let result = find(isEven, source)
            expect(result).toEqual(none())
        })

        it('should return none on an empty iterable', () => {
            let source: number[] = []
            let result = find(isEven, source)
            expect(result).toEqual(none())  
        })
    })
})
