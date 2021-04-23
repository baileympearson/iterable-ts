
function forEach<T>(sideEffect: (arg0: T) => void, iter: Iterable<T>): void {
    for (const value of iter) {
        sideEffect(value)
    }
}