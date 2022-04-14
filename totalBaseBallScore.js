const ops = ["5", "2", "C", "D", "+"];

const totalScore = (ops) => {
    const scores = [], len = ops.length;
    let i = 0;
    for (i; i < len; i++) {
        if (ops[i] == 'D') {
            scores.push(scores[scores.length - 1] * 2);
        } else if (ops[i] == 'C') {
            scores.pop();
        } else if (ops[i] == '+') {
            scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
        } else {
            scores.push(Number(ops[i]));
        }
    }

    return scores.reduce((c, p) => c + p);
};

console.log(totalScore(ops));

// console.log(!isNaN(5));