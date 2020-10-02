// write a function that loops through an array of strings and numbers. 
// for every string, it should add an s to the end of the word 
// (for example, if the given word was apple, it would become apples)
// for every number, it should add 20 to the number. 
// return the changed array. 

const addSAnd20 = function (arr) {
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'string') {
            arr[i] = arr[i] + "s";
        } else if (typeof arr[i] == 'number') {
            arr[i] = arr[i] + 20;
        }
    }
    return arr;
}


console.log((addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71])));

console.log((addSAnd20([56, 45, 71, 90, 28, 67])));

console.log((addSAnd20(['dog', 'apple', 'cheese'])));