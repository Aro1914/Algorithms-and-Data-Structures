let string = '{[]()[](){}(((()))){{{}((()[[[]](((){{{}}[[[[]((()){{{}[[[]((()))]]}})]]]}))]))}}}';
// let string = '{{{{{{{{{{{{{{{{{{{{[{}][()[()]]([])({}){()}{[]}{}}}}}}}}}}()}}}{()}';

const matching = (s) => {
    const stack = [], obj = {
        '[': ']',
        '{': '}',
        '(': ')'
    }, len = s.length;
    stack.push(s[0]);
    let index = 0, x = 1;
    for (x; x < len; x++) {
        if (index + 1 > (len - x)) return false;
        if (obj[stack[index]] == s[x]) {
            stack.pop();
            index--;
        }
        else {
            stack.push(s[x]);
            index++;
        }
    }
    return stack.length == 0;
};

console.time('matching');
console.log(matching(string));
console.timeEnd('matching');