let expect = (val) => {
    return {
        toBe(val1) {
            if (val1 === val) return true
            else throw Error("Not Equal")
        },
        notToBe (val2) {
            if (val2 != val) return true
            else return "Equal"
        }
    };
    };
    
    
console.log(expect(5).toBe(3))

