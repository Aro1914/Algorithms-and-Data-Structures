let message = 'Codility we test coders';
// let message = 'Emmanuel am grateful that I passed the test';
let K = 16;

const cut = (message, K) => {
    if (K > message.length)
        return message;
    let instance = K - 1;
    if (message[instance] != ' ' && message[K] == ' ')
        return message.slice(0, K);
    if (message[instance] != ' ' && message[K] != ' ')
        while (message[instance] != ' ' && instance != 0)
            instance--;
    return message.slice(0, instance);
};

//console.log(`'${cut(message, K)}'`);

const cutString = (message, K) => {
    if (K > message.length) return message;

    let cnt = K; let ind = 0;
    for (let i = K; i >= 0; i--){
        if (message[i] == ' ') {
            ind = i; break;
        }
    }

    return message.slice(0, ind);
};

console.log(`'${cutString(message, K)}'`);