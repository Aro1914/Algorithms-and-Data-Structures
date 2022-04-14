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
        // shapeShifter++;
        else
            arrayObj[element] = 1;
        // shapeShifter++;
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

    // const merge_sort = (values) => {
    //     if (values.length <= 1)
    //         return values;

    //     const middle_index = Math.floor(values.length / 2),
    //         left_values = merge_sort(values.slice(0, middle_index)),
    //         right_values = merge_sort(values.slice(middle_index)),
    //         left_length = left_values.length,
    //         right_length = right_values.length;

    //     let left_index = 0,
    //         right_index = 0,
    //         sorted_values = [];

    //     while (left_index < left_length && right_index < right_length) {
    //         left_values[left_index] < right_values[right_index] ?
    //             (sorted_values.push(left_values[left_index]),
    //                 left_index++)
    //             :
    //             (sorted_values.push(right_values[right_index]),
    //                 right_index++);
    //     }

    //     sorted_values = sorted_values.concat(left_values.slice(left_index)),
    //         sorted_values = sorted_values.concat(right_values.slice(right_index));
    //     return sorted_values;
    // };

    // newS = merge_sort(S);

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

populateArrays(cars, friends, 100000000, 9);

// console.log(friends, cars);

console.time('beEco');
console.log(beEco(friends, cars));
console.timeEnd('beEco');