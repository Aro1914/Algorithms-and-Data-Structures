const fibonacciSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

const nthFib = (pos = null) => {
    if (!pos || pos < 1) return null;
    previous = 0;
    current = 1;
    for (i = 0; i < pos - 1; i++)
        temp = current,
            current = temp + previous,
            previous = temp;
    return current;
};

// let x = 0, value = 0, i = 0;

// while (x != Infinity) {
//     value = x;
//     i++;
//     x = nthFib(i);
// }

// Last number in the fibonacci sequence before Infinity
// console.log(value);
for (let i = 1; i < 101; i++)
    console.log(nthFib(i));