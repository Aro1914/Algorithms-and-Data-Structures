const pollution = [7, 9, 3, 5, 2];

const reduce = (array) => {

    const sum = array.reduce((c, n) => c + n), // Get the total pollution emitted
        len = array.length,
        index = 0,
        arrayObj = {}; // Create an object to sort the array

    // Log each element occurrence into the object
    array.forEach(element => {
        if (arrayObj[element]) {
            arrayObj[element]++;
        } else {
            arrayObj[element] = 1;
        }
    });

    let currentSum = sum,
        filtersNeeded = 0,
        x = 1;

    // Sort the array
    for (const key in arrayObj) (() => {
        arrayObj[key] > 1 ?
            (() => {
                for (let i = 0; i < arrayObj[key]; i++) (() => {
                    array[len - x] = Number(key),
                        x++;
                })();
            })() :
            (() => {
                array[len - x] = Number(key),
                    x++;
            })();
    })();


    console.log(array);
    console.log('Pollution Sum', sum);
    console.log('Goal', (sum / 2));
    // Continually reduce the largest element in the array by half until its at least half
    while (currentSum > (sum / 2)) {
        console.log('Reduce the largest by half');
        array[index] /= 2, // Reducing the largest by half
            currentSum -= array[index]; // Effecting that reduction to the new reduced pollution

        console.log(array);
        console.log('Then push it to the back');
        // Shifting the once largest pollution to its rightful position
        const current = array[index];
        let i = index + 1;
        for (i; i < len; i++) {
            if (array[i])
                if (array[i] > current) {
                    const toBeSwapped = array[i];
                    array[i] = current;
                    array[i - 1] = toBeSwapped;
                } else
                    break;
            else
                break;
            console.count('Jumps');
        }
        console.countReset('Jumps');
        console.log(array);
        // For every iteration a reduction occurred, hence a filter was used
        filtersNeeded++;
        console.log('Goal', (sum / 2), 'Current Progress', currentSum);
        console.count('Filter(s) Used');
    }
    console.countReset('Filter(s) Used');

    // Return the number of filters applied during the course of reducing emissions
    return filtersNeeded;
};

console.time('Reduce Pollution');
// console.log(reduce(pollution));
reduce(pollution);
console.timeEnd('Reduce Pollution');