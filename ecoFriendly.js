const friends = [1, 4, 4, 5], cars = [4, 6, 5, 5];

const beEco = (P, S) => {
    S.sort((a, b) => b - a);
    const len = P.length;
    let index = 0, sum = P.reduce((a, b) => a + b), carCount = 0;
    for (index; index < len; index++) {
        const seats = Number(S[index]);
        if (!((sum - seats) < 0))
            sum -= seats, carCount++;
        if (sum == 0)
            return carCount;
    }
    return carCount;
};

console.time('beEco');
console.log(beEco(friends, cars));
console.timeEnd('beEco');