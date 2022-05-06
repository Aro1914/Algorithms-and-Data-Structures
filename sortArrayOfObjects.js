const arrayOfObjects = [
    {
        firstName: 'victor',
        lastName: 'Ijoni',
        id: 1,
        sex: 'male',
        age: 28
    },
    {
        firstName: 'Ruky',
        lastName: 'Choji',
        id: 11,
        sex: 'male',
        age: 14
    },
    {
        firstName: 'Caleb',
        lastName: 'Uzumaki',
        id: 09.5,
        sex: 'male',
        age: 14
    },
    {
        firstName: 'Itua',
        lastName: 'Minato',
        id: 5,
        sex: 'male',
        sex: 'male',
        age: 14
    },
    {
        firstName: 'shully',
        lastName: 'igbavwe',
        id: 3,
        sex: 'female',
        age: 16,
        nationality: 'Nigerian'
    },
    {
        firstName: 'esther',
        lastName: 'Hinata',
        id: 9.51,
        sex: 'female',
        age: 50
    },
    {
        firstName: 'taiwo',
        lastName: 'Ajayi',
        id: 41,
        sex: 'male',
        age: 29
    }
];

/**
 * Sorts an array of objects by a property present one level deep, in any object in the array. If successful, returns the sorted array of objects, else the original array is returned.
 * @param {Array<Object>} arrayOfObjects 
 * @param {String} commonProperty 
 * @returns {Array<Object>} sortedArrayOfObjects
 */
const sortArrayOfObjects = (arrayOfObjects, commonProperty) => {
    if (!arrayOfObjects) return arrayOfObjects;
    if (!Array.isArray(arrayOfObjects)) return arrayOfObjects;
    if (arrayOfObjects.length <= 1) return arrayOfObjects;
    let isInt = false;
    return arrayOfObjects.map((el, index) => {
        isInt = !isNaN(el?.[commonProperty]);
        return !isInt ?
            `${el?.[commonProperty]?.[0]?.toUpperCase()?.concat(el?.[commonProperty]?.slice(1))}^-.-^${index}` :
            `${el?.[commonProperty]}^-.-^${index}`;
    })?.sort(isInt ? (a, b) => Number(a?.split('^-.-^')?.[0]) - Number(b?.split('^-.-^')?.[0]) : undefined)?.map(el => arrayOfObjects[el?.split('^-.-^')?.[1]]);
};
console.log(sortArrayOfObjects([{ id: 1 }], 'id'));