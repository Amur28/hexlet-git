'use strict';

console.log(flatten([])); // []
console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]
console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]

function flatten(array) {
    const result = [];

    for (let elem of array) {
        if (!Array.isArray(elem)) {
            result.push(elem)
            continue
        }

        result.push(...elem);
    }

    return result
}