let dummyTel = '5555555555';

const valTel = (tel) => {
    let newString = '';
    let result = '';
    if (tel[0] == '-') {
        return false;
    }

    for (let i = 0; i < tel.length; i++) {
        const element = tel[i];
        if (element == '('
            || element == ')'
            || element == ' ') {
            newString += element;
            continue;
        }
        let code = tel.charCodeAt(i);
        if ((code > 47 && code < 58)) {
            newString += element;
        }
    }

    for (let i = 0; i < newString.length; i++) {
        const element = newString[i];
        if (element == '(') {
            if ((newString[i + 4] != ')')) {
                return false;
            }
        }
        if (element == ')') {
            if ((newString[i - 4] != '(')) {
                return false;
            }
        }
        let code = newString.charCodeAt(i);
        if ((code > 47 && code < 58)) {
            result += element;
        } else {
            result += ' ';
        }
    }

    let actual = [...result].filter(el => el != ' ');

    let filtered = result.split(' ');
    filtered = filtered.filter(el => el != '');

    // console.log(filtered);

    if (actual.length > 10) {
        if (Number(filtered[0]) != 1) {
            return false;
        }
    }

    if (actual.length < 10) {
        return false;
    }

    if (actual.length == 10) {
        if (!Number(filtered[0].length > 2)) {
            return false;
        }
        return true;
    }

    return true;
};

console.log(valTel(dummyTel));