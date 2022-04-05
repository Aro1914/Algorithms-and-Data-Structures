const array = [1, 2, 3, 44, 5, 6, 6, 7, 7];

const smallestAbsent = (array) => {
    const obj = {}, len = array.length; let smallest = 1, i = 0;
    for (i; i < len; i++) {
        const element = array[i];
        if (element < 1) {
            continue;
        }
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }

    while (obj[smallest]) {
        smallest++;
    }

    return smallest;
};

console.log(smallestAbsent(array));