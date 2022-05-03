const cutString = (message, K) => {
    if (K > message.length) return message;

    let cnt = K; let ind = 0;
    for (let i = K; i >= 0; i--) {
        if (message[i] == ' ') {
            ind = i; break;
        }
    }
    return message.slice(0, ind);
};

console.log(`'${cutString(message, K)}'`);