

/**
 * dedupe
 * 
 * @returns an iterator with any duplicates from the original iterator removed.  Order is preserved.
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
