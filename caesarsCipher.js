let encoded = 'GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.';

const rot13 = (code) => {
    const a_z = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    let newString = '';
    for (let i = 0; i < code.length; i++) {
        if (/\W+/.test(code[i])) {
            newString += code[i];
        } else {
            const jump = (a_z.indexOf(code[i]) + 1) > 13 ? (a_z.indexOf(code[i])) - 13 : (a_z.indexOf(code[i])) + 13;
            newString += a_z[jump];
        }
    }
    return newString;
};

console.log(rot13(encoded));