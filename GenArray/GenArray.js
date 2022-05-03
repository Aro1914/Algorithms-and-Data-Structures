const genArray = (size, negPos, negatives = true) => {
    let randomArray = [];
    for (let i = 0; i < size; i++) {
        negatives ? randomArray[i] = ((Math.floor(Math.random() * ((negPos * 2) + 1))) - negPos) : randomArray[i] = Math.round((Math.random() * negPos));
    }
    return randomArray;
};