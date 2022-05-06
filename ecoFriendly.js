// const friends = [0, 3, 2, 2], cars = [4, 6, 5, 5];

// const friends = [4, 6, 9, 7, 3, 2, 2], cars = [3, 6, 8, 4, 6, 5, 5];

const populateArrays = (randomArray, randomCompliment, size, negPos) => {
    let i = 0;
    for (i; i < size; i++) {
        const base = Math.ceil((Math.random() * negPos));
        randomArray[i] = base,
            randomCompliment[i] = Math.ceil((Math.random() * base));
    }
    return true;
};

const beEco = (P, S) => {
    let sum = P.reduce((a, b) => a + b);
    if (sum == 0) return sum;
    const lenS = S.length,
        lenP = P.length,
        arrayObj = {};

    let i = 0,
        newS = [];
    shapeShifter = 0;

    for (i; i < lenS; i++) {
        const element = S[i];
        if (!element) continue;
        else if (arrayObj[element])
            arrayObj[element]++;
        else
            arrayObj[element] = 1;
    }

    for (const key in arrayObj) {
        if (arrayObj[key] > 1) {
            let i = 0;
            for (i; i < arrayObj[key]; i++)
                newS[shapeShifter] = Number(key),
                    shapeShifter++;
        }
        else
            newS[shapeShifter] = Number(key),
                shapeShifter++;
    }
    i = lenP - 1, shapeShifter = 0;
    for (i; i > 0; i--) {
        const seats = Number(newS[i]);
        sum -= seats, shapeShifter++;
        if (sum <= 0)
            break;
    }
    return shapeShifter;
};

const friends = [], cars = [];

populateArrays(cars, friends, 1000, 9);

// console.log(friends, cars);

console.time('beEco');
console.log(beEco(friends, cars));
console.timeEnd('beEco');