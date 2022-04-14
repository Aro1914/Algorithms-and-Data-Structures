

const testPatience = (A, X, Y, Z) => {
    if (!A.length) {
        return -1;
    }
    let i = 0,
        waitingTime = 1;

    const dispensers = {
        X: X,
        Y: Y,
        Z: Z
    },
        stations = {
            X: 0,
            Y: 0,
            Z: 0
        };
    len = A.length;

    while (i < len) {
        const element = A[i];
        let isFree = true; free = 0, occupied = 0;
        // console.log(A[i]);
        for (const key in stations) {
            if (stations[key]) {
                stations[key]--;
                occupied++;
            } else {
                if (dispensers[key] >= element) {
                    stations[key] = element;
                    dispensers[key] -= element;
                    i++;
                    break;
                } else {
                    free++;
                    occupied++;
                }
            }
        }
        if (free == 3) {
            return -1;
        } else {
            free = 0;
        }
        if (occupied == 3) {
            waitingTime++;
        } else {
            occupied = 0;
        }
        // console.log(waitingTime);
    }

    return waitingTime;
};

const A = [2, 8, 4, 3, 2],
    X = 7,
    Y = 11,
    Z = 3;

console.log(testPatience(A, X, Y, Z));


/******************************************
    7   11  3

2   2   8   -   

8   2   8   -   6   10  3

4   4   8   3   5   9   3

3   4   8   3   4   8   2

2   4   8   3   3   7   1

    4   8   -   2   6   0

    -   8   -   1   5   0

    -   8   -   1   4   0
    
    -   2   -   1   3   0

    -   2   -   1   2   0

    -   -   -   1   1   0

*/