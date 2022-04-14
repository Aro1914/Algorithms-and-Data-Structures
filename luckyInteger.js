const array = [2, 2, 3, 4, 6, 4, 4, 3, 6, 6, 4, 3, 5, 4, 5, 4, 4];

const winningCard = (array) => {
    if (array === null ||
        array === undefined)
        return -1;
    if (array.length <= 1 && array[0] == 1)
        return array[0];
    else {
        const frequencies = {}, lucky = [], len = array.length;
        let index = 0;
        for (index; index < len; index++) {
            let number = Number(array[index]);
            if (frequencies[number])
                frequencies[number]++;
            else
                frequencies[number] = 1;
        }
        for (const number in frequencies) {
            if (frequencies[number] == number)
                lucky.push(Number(number));
            else
                continue;
        }
        if (lucky.length == 0)
            return -1;

        const iAmLucky = lucky[lucky.length - 1];
        return iAmLucky;
    }
};

console.time('findLucky');
console.log(winningCard(array));
console.timeEnd('findLucky');