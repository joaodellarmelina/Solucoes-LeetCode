var createCounter = function (init) {

    let reset = init

    return {
        increment() {
            return init += 1;


        },
        decrement() {
            return init -= 1;

        },
        reset() {
            if (init != reset) {
                init = reset
                return init
            } else {
                return reset
            }

        }

    }
};

// const counter = createCounter(5);

// counter.increment(); // 6
// console.log('✌️counter.increment() --->', counter.increment());

// counter.reset(); // 5
// console.log('✌️counter.reset() --->', counter.reset());

// counter.decrement(); // 4
// console.log('✌️counter.decrement() --->', counter.decrement());




// const counter = createCounter(0);

// counter.increment(); // 1
// console.log('✌️counter.increment() --->', counter.increment());

// counter.increment(); // 2
// console.log('✌️counter.increment() --->', counter.increment());

// counter.decrement(); // 1
// console.log('✌️counter.decrement() --->', counter.decrement());

// counter.reset(); // 0
// console.log('✌️counter.reset() --->', counter.reset());

// counter.reset(); // 0
// console.log('✌️counter.reset() --->', counter.reset());
