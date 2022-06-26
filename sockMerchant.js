const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20, 20];

const sockMerchant = (n, ar) => {
    const pair = {};
    for (let index = 0; index < n; index++) {
        const element = ar[index];
        pair[element] = 0;
    }

    let i = 0, pairs = 0;
    for (i; i < n; i++) {
        const c = ar[i];
        pair[c]++;
        if (pair[c] == 2) {
            pair[c] = 0;
            pairs++;
        }
    };
    return pairs;
};

console.log(sockMerchant(socks.length, socks));