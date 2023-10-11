function createHelloWorld() {

    return function hello() {
        console.log("Hello World")
    }
}

const HelloWorld = createHelloWorld()

HelloWorld()