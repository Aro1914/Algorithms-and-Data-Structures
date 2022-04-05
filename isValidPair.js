let string = '[{}][()]([])({}){()}{[]}';

const isValid = (s) => {
    if (s.length % 2 != 0) return false;
    if (!s[0] || s[0] == '}' || s[0] == ']' || s[0] == ')') return false;
    let j = 0, i = 0, l = s.length;
    for (i; i < l; i++) {
        const c = s[i], n = s[i + 1];
        if (!n) break;
        if ((c == '{' && n != '}') || (c == '[' && n != ']') || (c == '(' && n != ')')) j++;
        if ((c == '{' && n == '}') || (c == '[' && n == ']') || (c == '(' && n == ')')) {
            i++;
            let cnt = (i - 1) - j, x = 0, js = j + 1;
            for (x; x < js; cnt++, x++) {
                const b = s[cnt], f = s[((j + (i - 1)) + 1) - x];
                if (f == undefined || f == null) return false;
                if ((b == '{' && f != '}') || (b == '[' && f != ']') || (b == '(' && f != ')')) return false;
            }
            i += j;
            j = 0;
            if (s[i + 1])
                if (s[i + 1] == '}' || s[i + 1] == ']' || s[i + 1] == ')') return false;
        }
    }
    return !j > 0;
};

console.log(isValid(string));