let message = 'Codility we test coders';
// let message = 'Emmanuel am grateful that I passed the test';
let K = 10;

const cut = (message, K) => {
    if (K > message.length) {
        return message;
    }

    let instance = K - 1;
    if (message[K - 1] != ' ' && message[K] == ' ') {
        console.log(message.slice(0, K).length);
        return message.slice(0, K);
    }

    if (message[K - 1] != ' ' && message[K] != ' ') {
        while (message[instance] != ' ' && message.indexOf(message[instance]) != 0) {
            instance--;
        }
    }
    return message.slice(0, instance);
};

console.log(`'${cut(message, K)}'`);
