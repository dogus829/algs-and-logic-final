testArray1 = [1, [2, 3, 4], 6, 7, 5];
testArray2 = [1, [2, 3, 4],
    [2], 7, [3, 5, 6]
];

function sumNestedArray(array) {

    let result = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result += sumNestedArray(array[i]);
        } else result += array[i];
    }

    return result;
}

console.log(sumNestedArray(testArray2));
console.log(sumNestedArray(testArray1));
console.log(sumNestedArray([1, 2, 3, 4, 5, [1, 2]]))