var createCounter = function (n) {
    let currentCounter = n - 1

    return () => {
        currentCounter += 1
        return currentCounter
    }
}

let counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())