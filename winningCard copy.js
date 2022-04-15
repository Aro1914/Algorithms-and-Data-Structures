const array = [[5, 7, 3, 9, 4, 9, 8, 3, 1], [1, 2, 2, 4, 4, 1], [1, 2, 3]];

const winningCard = (cards) => {
    if (cards === null ||
        cards === undefined ||
        cards.length == 0)
        return -1;
    else {
        const frequencies = {}, lucky = [], len = cards.length;
        let index = 0;
        for (index; index < len; index++) {
            const element = cards[index];
            const elLength = element.length;
            let i = 0;
            for (i; i < elLength; i++) {
                const number = Number(element[i]);
                if (frequencies[number])
                    frequencies[number]++;
                else
                    frequencies[number] = 1;
            }
        }

        for (const number in frequencies) {
            if (frequencies[number] == 1)
                lucky.push(Number(number));
            else
                continue;
        }
        if (lucky.length == 0)
            return -1;

        const ace = lucky[lucky.length - 1];
        return ace;
    }
};

console.time('winningCard');
console.log(winningCard(array));
console.timeEnd('winningCard');