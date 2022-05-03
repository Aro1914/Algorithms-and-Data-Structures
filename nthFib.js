const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const nthFib = (pos) => {
    if (!pos) return 0;
    if (pos <= 3) return 1;
    let secondPrevious = 0, firstPrevious = 1, current = 0, i = 1;
    for (i; i < pos; i++)
        current = firstPrevious + secondPrevious,
            secondPrevious = firstPrevious,
            firstPrevious = current;
    return current;
};

let x, value = 0, i = 0;

while (x != Infinity) {
    value = x;
    i++;
    x = nthFib(i);
}

// Last number in the sequence before Infinity
console.log(value);