const friends = [0, 3, 2, 2], cars = [4, 6, 5, 5];

const beEco = (P, S) => {
    S.sort((a, b) => b - a);
    const len = P.length;
    let sum = P.reduce((a, b) => a + b);
    if (sum == 0) return sum;
    let index = 0, carCount = 0;
    for (index; index < len; index++) {
        const seats = Number(S[index]);
        sum -= seats, carCount++;
        if (sum <= 0)
            return carCount;
    }
    return carCount;
};

console.time('beEco');
console.log(beEco(friends, cars));
console.timeEnd('beEco');