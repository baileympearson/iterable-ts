

/**
 * dedupe
 * 
 * @returns An iterable that contains only the first of each distinct value.
 */
export function* dedupe<T>(iter: Iterable<T>): Generator<T> {
    const values = new Set()
    for (const value of iter) {
        if (!values.has(value)) {
            values.add(value)
            yield value
        }
    }
}
