// let string = 'toR6YRY7EWW*#(#*0@&ww9eyryro-t';
let string = '0_0 (: /-\ :) 0-0';

/** 
 * @param {String} string 
 * @returns boolean
 */
const isPalindrome = (string) => {
    let newString = "";
    let code, i, len;
    for (i = 0, len = string.length; i < len; i++) {
        code = string.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            continue;
        }
        newString += string[i];
    }
    newString = newString.toLowerCase();

    let counts = Math.floor(newString.length / 2);
    for (let i = 0; i < counts; i++) {
        if (newString[i] != newString[(newString.length - 1) - i])
            return false;
    }
    return true;
};
console.log(isPalindrome(string));