const path = 'UUUUDDDUDDDUUDUDDDUUUDDD';

const countingValleys = (steps, path) => {
    const rule = {
        'D': -1,
        'U': 1
    };
    let valleys = 0, altitude = 0, i = 0;
    for (i; i < steps; i++) {
        altitude += rule[path[i]];
        if (altitude < 0) {
            while (altitude < 0 && i < steps) i++, altitude += rule[path[i]];
            if (altitude >= 0 && i < steps) valleys++;
        }
    }
    return valleys;
};

console.log(countingValleys(path.length, path));