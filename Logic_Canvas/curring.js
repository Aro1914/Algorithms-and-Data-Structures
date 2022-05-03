const add = (x) => {
    return (y) => {
        return x + y;
    };
};

console.log(add(3)(2));

const sum = (x) => {
    const and = (y) => {
        const thenMultiplyBy = (z) => {
            return (x + y) * z;
        };
        return { thenMultiplyBy };
    };
    return { and };
};

console.log(sum(3).and(2).thenMultiplyBy(3));

const sumAndMultiplyBy = (x) => {
    x;
    return (y) => {
        y;
        return (z) => {
            z;
            return (x + y) * z;
        };
    };
};

console.log(sumAndMultiplyBy(3)(2)(3));

const addAndMultiplyBy = (x) => (y) => (z) => (x + y) * z;

console.log(addAndMultiplyBy(3)(2)(3));

const addAndProduct = (x) => (y) => (z, a = x + y) => a * z;

console.log(addAndProduct(3)(2)(3));

const calcNthFib = (n) => {
    if (n < 2) return 1;
    return calcNthFib(n - 1) + calcNthFib(n - 2);
};

console.log(calcNthFib(78));
