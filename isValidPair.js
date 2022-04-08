let string = '{[]()[](){}(((()))){{{}((()[[[]](((){{{}}[[[[]((()){{{}[[[]((()))]]}})]]]}))]))}}}';
// let string = '{{{{{{{{{{{{{{{{{{{{[{}][()[()]]([])({}){()}{[]}{}}}}}}}}}}}}}}}}}}}}}';

const isValid = (s) => {
    if (!s[0] || s.length % 2 != 0) return false;
    const pair = {
        '[': ']',
        '{': '}',
        '(': ')'
    };
    if (!pair[s[0]]) return false;
    let i = 0, l = s.length;
    for (i; i < l; i++) {
        if (!s[i + 1]) break;
        const c = s[i], n = s[i + 1];
        if (pair[c] == n)
            s = s.substring(0, i) + s.substring(i + 2, s.length), i -= 2, l = s.length;
    };
    return l == 0;
};

console.time('isValidPair');
console.log(isValid(string));
console.timeEnd('isValidPair');