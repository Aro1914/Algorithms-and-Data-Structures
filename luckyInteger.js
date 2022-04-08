const array = [0, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7];

const findLucky = (array) => {
    if (array === null ||
        array === undefined)
        return -1;
    else if (array.length <= 1)
        return array[0];
    else {
        const frequencies = {}, lucky = [], len = array.length;
        let iAmLucky = 0, index = 0;
        for (index; index < len; index++) {
            let number = Number(array[index]);
            if (frequencies[number])
                frequencies[number]++;
            else
                frequencies[number] = 1;
        }
        if (Object.keys(frequencies).length) {
            for (const number in frequencies) {
                if (frequencies[number] == number)
                    lucky.push(Number(number));
                else
                    continue;
            }
            if (lucky.length == 0)
                return -1;
        }

        lucky.forEach(el => el > iAmLucky ? iAmLucky = el : false);
        return iAmLucky;
    }
};

console.time('findLucky');
console.log(findLucky(array));
console.timeEnd('findLucky');