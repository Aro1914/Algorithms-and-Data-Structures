let string = '[{}][()]([])({}){()}{[]}';

const isValid = (s) => {
    if (s.length % 2 != 0) return false;
    if (!s[0] || s[0] == '}' || s[0] == ']' || s[0] == ')') return false;
    let jump = 0, i = 0, sLength = s.length;
    for (i; i < sLength; i++) {
        const c = s[i], n = s[i + 1];
        if (!n) break;
        if ((c == '{' && n != '}') || (c == '[' && n != ']') || (c == '(' && n != ')')) jump++;
        if ((c == '{' && n == '}') || (c == '[' && n == ']') || (c == '(' && n == ')')) {
            i++;
            let counter = (i - 1) - jump, index = 0, jumps = jump + 1;
            for (index; index < jumps; counter++, index++) {
                const b = s[counter], f = s[((jump + (i - 1)) + 1) - index];
                if (f == undefined || f == null) return false;
                if ((b == '{' && f != '}') || (b == '[' && f != ']') || (b == '(' && f != ')')) return false;
            }
            i += jump;
            jump = 0;
            if (s[i + 1])
                if (s[i + 1] == '}' || s[i + 1] == ']' || s[i + 1] == ')') return false;
        }
    }
    return !jump > 0;
};

console.log(isValid(string));