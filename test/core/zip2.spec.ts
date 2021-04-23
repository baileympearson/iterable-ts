import { zip2 } from "../../src/core/zip2"
import { into } from "../../src/utility"


describe('zip2 tests', () => {
    it('should yield nothing if both iterables are empty', () => {
        const result = into('array', zip2([], []))
        expect(result).toEqual([])
    })

    it('should yield nothing if one of the iterables is empty', () => {
        const result = into('array', zip2([1,2,3], []))
        expect(result).toEqual([])
        const result2 = into('array', zip2([], [1,2,3]))
        expect(result2).toEqual([])
    })

    it('should zip elements up pairwise into arrays', () => {
        const source1 = [1,2,3]
        const source2 = [4,5,6]
        const result = into('array', zip2(source1, source2))
        const expected = [
            [1,4],
            [2,5],
            [3,6]
        ]
        expect(result).toEqual(expected)
    })

    it('should zip elements up of different types', () => {
        const source1 = [1,2,3]
        const source2 = ['a', 'b', 'c']
        const result = into('array', zip2(source1, source2))
        const expected = [
            [1,'a'],
            [2,'b'],
            [3,'c']
        ]
        expect(result).toEqual(expected)
    })

    describe('should stop after the shorter iterable is exhausted', () => {
        test('first parameter', () => {
            const source1 = [1,2,3]
            const source2 = [4,5,6,7,8]
            const result = into('array', zip2(source1, source2))
            const expected = [
                [1,4],
                [2,5],
                [3,6]
            ]
            expect(result).toEqual(expected)
        })

        test('second parameter', () => {
            const source1 = [1,2,3,7,8]
            const source2 = [4,5,6]
            const result = into('array', zip2(source1, source2))
            const expected = [
                [1,4],
                [2,5],
                [3,6]
            ]
            expect(result).toEqual(expected)
        })
    })
})