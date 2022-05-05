const isDuo = (number) => {
    if (!number) return 'n';
    number = number.toString();
    if (number.length < 2) return 'n';
    const obj = {};
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (isNaN(element)) continue;
        if (obj[element])
            obj[element]++;
        else
            obj[element] = 1;
    }
    return Object.keys(obj).length <= 2 ? 'y' : 'n';
};

console.log(isDuo('99'));

const isDuo2 = (number) => {
    if (!number) return 'n';
    number = number.toString();
    if (number.length < 2) return 'n';
    const arr = [number[0]];
    for (let i = 1; i < number.length; i++) {
        const element = number[i];
        if (isNaN(element)) continue;
        if (arr.length < 2) {
            if (element != arr[0])
                arr.push(element);
        }
        else
            if (element != arr[0] &&
                element != arr[1])
                return 'n';
    }
    return 'y';
};

console.log(isDuo2('99'));