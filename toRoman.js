let number = 99999;

/**
 * @param {Number} num 
 */
const toRoman = (num) => {
    return num >= 1000000 ? (() => 'Number is out of bounds')() :
        (() => {
            num = num.toString();
            const M = ' ̅M', HTH = 'ↈ', TTH = 'X̅', TH = 'M', H = 'C', T = 'X', U = 'I';
            const FHTH = '(D)', FTTH = 'ↇ', FTH = 'V̅', FH = 'D', FT = 'L', FU = 'V';
            const NTH = 'I̅X̅', NHTH = '(C) ̅M';
            // const NH = 'CM', NT = 'XC', NU = 'IX';
            const length = num.length;

            let roman = '';
            for (let i = 0; i < num.length; i++) {
                const element = Number(num[i]);
                if (length - i == 6) {
                    if (element == 0) {
                        continue;
                    } else if (element < 4) {
                        roman += HTH.repeat(element);
                    } else if (element == 4) {
                        roman += HTH + FHTH;
                    } else if (element < 9) {
                        roman += FHTH + HTH.repeat(element - 5);
                    } else if (element == 9) {
                        roman += NHTH;
                    }
                }
                if (length - i == 5) {
                    if (element == 0) {
                        continue;
                    } else if (element < 4) {
                        roman += TTH.repeat(element);
                    } else if (element == 4) {
                        roman += TTH + FTTH;
                    } else if (element < 9) {
                        roman += FTTH + TTH.repeat(element - 5);
                    } else if (element == 9) {
                        roman += TTH + HTH;
                    }
                }
                if (length - i == 4) {
                    if (element == 0) {
                        continue;
                    } else if (element < 4) {
                        roman += TH.repeat(element);
                    } else if (element == 4) {
                        roman += TH + FTH;
                    } else if (element < 9) {
                        roman += FTH + TH.repeat(element - 5);
                    } else if (element == 9) {
                        roman += NTH;
                    }
                }
                if (length - i == 3) {
                    if (element == 0) {
                        continue;
                    } else if (element < 4) {
                        roman += H.repeat(element);
                    } else if (element == 4) {
                        roman += H + FH;
                    } else if (element < 9) {
                        roman += FH + H.repeat(element - 5);
                    } else if (element == 9) {
                        roman += H + TH;
                    }
                }
                if (length - i == 2) {
                    if (element == 0) {
                        continue;
                    } else if (element < 4) {
                        roman += T.repeat(element);
                    } else if (element == 4) {
                        roman += T + FT;
                    } else if (element < 9) {
                        roman += FT + T.repeat(element - 5);
                    } else if (element == 9) {
                        roman += T + H;
                    }
                }
                if (length - i == 1) {
                    if (element == 0) {
                        continue;
                    } else if (element < 4) {
                        roman += U.repeat(element);
                    } else if (element == 4) {
                        roman += U + FU;
                    } else if (element < 9) {
                        roman += FU + U.repeat(element - 5);
                    } else if (element == 9) {
                        roman += U + T;
                    }
                }
            }
            return roman;
        })();
};

console.log(toRoman(number));
