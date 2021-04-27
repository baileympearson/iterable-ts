import { is_none, is_some, none, some } from "../../src/utility"


describe('optional tests', () => {
    test('some() should create a some object', () => {
        const result = some(5)
        const expected = {
            type: 'some',
            data: 5
        }
        expect(result).toEqual(expected)
    })

    test('is_some should return true for some objects', () => {
        const result = is_some(some(5))
        const expected = true
        expect(result).toBe(expected)
    })

    test('is_some should return false for none objects', () => {
        const result = is_some(none())
        const expected = false
        expect(result).toBe(expected)
    })

    test('none() should create a none object', () => {
        const result = none()
        const expected = {
            type: 'none'
        }
        expect(result).toEqual(expected)
    })

    test('is_some should return true for some objects', () => {
        const result = is_some(none())
        const expected = false
        expect(result).toBe(expected)
    })

    test('is_some should return false for none objects', () => {
        const result = is_none(none())
        const expected = true
        expect(result).toBe(expected)
    })

})